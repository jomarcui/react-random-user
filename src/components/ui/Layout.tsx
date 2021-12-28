import { Col, Container, Row } from "react-bootstrap"

export const ComponentsUILayout: React.FC = ({ children }) => {
    return (
        <div className="d-flex bg-light h-100">
            <div className="mx-auto h-50 w-50">
                {children}
            </div>
        </div>
    );
}