import { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { getRandomData } from "../../api/api.service";
import { RANDOM_USER_URL } from "../../constants/constants";
import { IPerson } from "../../interfaces";
import { ComponentsPersonDetailsTable } from "./DetailsTable";
import styled from "styled-components";

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

const CardStyled = styled(Card)`
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    min-height: 203px;
`;

export const ComponentsPersonCard: React.FC = () => {
    const { isLoading, person, buttonHandleClick } = useComponentsPersonCard();

    return (
        <CardStyled>
            <Card.Body className="d-flex flex-column">
                <div className="align-items-center d-flex justify-content-between">
                    <h5 className="m-0">
                        Random Person Details
                    </h5>
                    <div>
                        <Button disabled={isLoading} onClick={buttonHandleClick}>Refresh</Button>
                    </div>
                </div>
                <div className="align-items-center d-flex flex-fill justify-content-center">
                    {isLoading && (
                        <Spinner animation="border" variant="info" />
                    )}

                    {(!isLoading && !!person) && (
                        <ComponentsPersonDetailsTable email={person.email} name={person.name} />
                    )}
                </div>
            </Card.Body>
        </CardStyled>
    );
}