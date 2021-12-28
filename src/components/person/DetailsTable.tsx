import { Table } from "react-bootstrap";
import { IPerson, ITableColumn } from "../../interfaces";
import { getFullName } from "../../utils/utils";

const TableColumn: React.FC<ITableColumn> = ({ children, isRightAligned }) => {
    const className = `border-0 ${isRightAligned ? 'text-end' : undefined}`;

    return (
        <td className={className}>
            {children}
        </td>
    );
}

export const ComponentsPersonDetailsTable: React.FC<IPerson> = ({ email, name }) => {
    const fullName = getFullName(name);

    return (
        <Table>
            <tbody>
                <tr>
                    <TableColumn isRightAligned>
                        Name:
                    </TableColumn>
                    <TableColumn>
                        {fullName}
                    </TableColumn>
                </tr>
                <tr>
                    <TableColumn isRightAligned>
                        Email:
                    </TableColumn>
                    <TableColumn>
                        {email}
                    </TableColumn>
                </tr>
            </tbody>
        </Table>
    );
}