import React, { ErrorInfo } from 'react';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_error: Error) {
        // Обновляем состояние, чтобы следующий рендер показал запасной UI
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Можно отправить информацию об ошибке на сервер или в службу логирования
        console.error('Ошибка:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h1>Что-то пошло не так.</h1>
                    <p>Попробуйте перезагрузить страницу.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
