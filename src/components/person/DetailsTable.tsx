import { Table } from "react-bootstrap";
import { IPerson } from "../../interfaces";
import { getFullName } from "../../utils/utils";

export const ComponentsPersonDetailsTable: React.FC<IPerson> = ({ email, name }) => {
    const fullName = getFullName(name);

    return (
        <Table bordered>
            <tbody>
                <tr>
                    <td>
                        Name:
                    </td>
                    <td>
                        {fullName}
                    </td>
                </tr>
                <tr>
                    <td>
                        Email:
                    </td>
                    <td>
                        {email}
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}