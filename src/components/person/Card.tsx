import { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { getRandomData } from "../../api/api.service";
import { RANDOM_USER_URL } from "../../constants/constants";
import { IPerson } from "../../interfaces";
import { ComponentsPersonDetailsTable } from "./DetailsTable";

const useComponentsPersonCard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [person, setPerson] = useState<IPerson>();

    useEffect(() => {
        generateRandomPerson();
    }, []);

    const generateRandomPerson = () => {
        setIsLoading(true);

        getRandomData(RANDOM_USER_URL)
            .then((data: IPerson) => {
                setPerson(data);
                setIsLoading(false);
            });
    }

    const buttonHandleClick = () => {
        generateRandomPerson();
    }

    return { isLoading, person, buttonHandleClick };
}

export const ComponentsPersonCard: React.FC = () => {
    const { isLoading, person, buttonHandleClick } = useComponentsPersonCard();

    return (
        <Card>
            <Card.Body>
                <div className="align-items-center d-flex justify-content-between">
                    <h5>
                        Random Person Details
                    </h5>
                    <div>
                        <Button disabled={isLoading} onClick={buttonHandleClick}>Refresh</Button>
                    </div>
                </div>
                <div className="d-flex justify-content-center my-3">
                    {isLoading && (
                        <Spinner animation="border" />
                    )}

                    {(!isLoading && !!person) && (
                        <ComponentsPersonDetailsTable email={person.email} name={person.name} />
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}