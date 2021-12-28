import { ComponentsPersonCard } from "../components/person/Card";
import { ComponentsUILayout } from "../components/ui/Layout";

export const Home: React.FC = () => {
    return (
        <ComponentsUILayout>
            <div className="my-3">
                <ComponentsPersonCard />
            </div>
        </ComponentsUILayout>
    );
}