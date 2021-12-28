export const ComponentsUILayout: React.FC = ({ children }) => {
    return (
        <div className="d-flex bg-secondary flex-column h-100 justify-content-center">
            <div className="mx-auto w-50">
                {children}
            </div>
        </div>
    );
}