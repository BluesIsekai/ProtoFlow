import { useEffect, useRef, useState } from "react";

export type SocketConnectionStatus = "connecting" | "connected" | "disconnected" | "error";

interface UseWebSocketOptions<TMessage> {
    url: string;
    debounceMs?: number;
    onMessage: (message: TMessage) => void;
    onStatusChange?: (status: SocketConnectionStatus) => void;
    onError?: (error: string) => void;
}

export function useWebSocket<TMessage>({
    url,
    debounceMs = 350,
    onMessage,
    onStatusChange,
    onError,
}: UseWebSocketOptions<TMessage>): { status: SocketConnectionStatus; reconnectAttempts: number } {
    const [status, setStatus] = useState<SocketConnectionStatus>("connecting");
    const [reconnectAttempts, setReconnectAttempts] = useState(0);

    const wsRef = useRef<WebSocket | null>(null);
    const reconnectTimeoutRef = useRef<number | null>(null);
    const stoppedRef = useRef(false);
    const attemptRef = useRef(0);
    const connectionIdRef = useRef(0);
    const pendingMessageRef = useRef<TMessage | null>(null);
    const debounceTimerRef = useRef<number | null>(null);
    const onMessageRef = useRef(onMessage);
    const onStatusChangeRef = useRef(onStatusChange);
    const onErrorRef = useRef(onError);

    useEffect(() => {
        onMessageRef.current = onMessage;
        onStatusChangeRef.current = onStatusChange;
        onErrorRef.current = onError;
    }, [onMessage, onStatusChange, onError]);

    useEffect(() => {
        stoppedRef.current = false;
        attemptRef.current = 0;

        const clearReconnect = () => {
            if (reconnectTimeoutRef.current !== null) {
                window.clearTimeout(reconnectTimeoutRef.current);
                reconnectTimeoutRef.current = null;
            }
        };

        const clearDebounce = () => {
            if (debounceTimerRef.current !== null) {
                window.clearTimeout(debounceTimerRef.current);
                debounceTimerRef.current = null;
            }
        };

        const scheduleReconnect = (activeConnectionId: number) => {
            clearReconnect();
            const nextAttempt = attemptRef.current + 1;
            attemptRef.current = nextAttempt;
            const delay = Math.min(5000, 400 * 2 ** Math.min(4, nextAttempt));

            setReconnectAttempts(nextAttempt);

            reconnectTimeoutRef.current = window.setTimeout(() => {
                if (stoppedRef.current || connectionIdRef.current !== activeConnectionId) {
                    return;
                }
                connect();
            }, delay);
        };

        const connect = () => {
            clearReconnect();
            wsRef.current?.close();

            const currentConnectionId = connectionIdRef.current + 1;
            connectionIdRef.current = currentConnectionId;

            setStatus("connecting");
            onStatusChangeRef.current?.("connecting");

            try {
                const ws = new WebSocket(url);
                wsRef.current = ws;

                ws.onopen = () => {
                    if (connectionIdRef.current !== currentConnectionId || stoppedRef.current) {
                        ws.close();
                        return;
                    }

                    clearReconnect();
                    attemptRef.current = 0;
                    setReconnectAttempts(0);
                    setStatus("connected");
                    onStatusChangeRef.current?.("connected");
                };

                ws.onmessage = event => {
                    if (connectionIdRef.current !== currentConnectionId || stoppedRef.current) {
                        return;
                    }

                    try {
                        const parsed = JSON.parse(event.data) as TMessage;
                        pendingMessageRef.current = parsed;

                        clearDebounce();
                        debounceTimerRef.current = window.setTimeout(() => {
                            if (pendingMessageRef.current !== null && !stoppedRef.current) {
                                onMessageRef.current(pendingMessageRef.current);
                            }
                        }, debounceMs);
                    } catch {
                        onErrorRef.current?.("Invalid WebSocket payload");
                    }
                };

                ws.onerror = () => {
                    if (connectionIdRef.current !== currentConnectionId || stoppedRef.current) {
                        return;
                    }

                    setStatus("error");
                    onStatusChangeRef.current?.("error");
                    onErrorRef.current?.("WebSocket error");
                };

                ws.onclose = () => {
                    if (stoppedRef.current || connectionIdRef.current !== currentConnectionId) {
                        return;
                    }

                    setStatus("disconnected");
                    onStatusChangeRef.current?.("disconnected");
                    scheduleReconnect(currentConnectionId);
                };
            } catch {
                setStatus("error");
                onStatusChangeRef.current?.("error");
                onErrorRef.current?.("Failed to create WebSocket connection");
                scheduleReconnect(currentConnectionId);
            }
        };

        connect();

        return () => {
            stoppedRef.current = true;
            clearReconnect();
            clearDebounce();
            wsRef.current?.close();
            wsRef.current = null;
        };
    }, [url, debounceMs]);

    return { status, reconnectAttempts };
}
