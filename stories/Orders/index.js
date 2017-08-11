import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

export const Orders = () => (
    <div>
        <Table    selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow >
                    <TableHeaderColumn colSpan="4" tooltip="Super Header" style={{textAlign: 'center'}}>
                        Мои треннинги
                    </TableHeaderColumn>
                </TableRow>
                <TableRow  >
                    <TableHeaderColumn >Дата проведения</TableHeaderColumn>
                    <TableHeaderColumn>Дата окончания</TableHeaderColumn>
                    <TableHeaderColumn>Тренер</TableHeaderColumn>
                    <TableHeaderColumn>Название мероприятия</TableHeaderColumn>
                </TableRow>
                </TableHeader>
            <TableBody displayRowCheckbox={false}>
                <TableRow >
                    <TableRowColumn>11.03.2018</TableRowColumn>
                    <TableHeaderColumn>23.04.2018</TableHeaderColumn>
                    <TableRowColumn>Василий Казанцев</TableRowColumn>
                    <TableRowColumn>Повышаем уверенность в себе</TableRowColumn>
                </TableRow>
                <TableRow >
                    <TableRowColumn>22.05.2018</TableRowColumn>
                    <TableHeaderColumn>22.07.2018</TableHeaderColumn>
                    <TableRowColumn>Валерия Бузина</TableRowColumn>
                    <TableRowColumn>Как быть красивой </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>18.06.2018</TableRowColumn>
                    <TableHeaderColumn>18.09.2018</TableHeaderColumn>
                    <TableRowColumn>Дмитрий Юкубов</TableRowColumn>
                    <TableRowColumn>Люби себя больше всех!</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>11.08.2018</TableRowColumn>
                    <TableHeaderColumn>11.12.2018</TableHeaderColumn>
                    <TableRowColumn>Андрей Самозванов</TableRowColumn>
                    <TableRowColumn>Делаем деньги из воздуха, чтобы пустить их на ветер!</TableRowColumn>
                </TableRow>
                <TableRow >
                    <TableRowColumn>26.09.2018</TableRowColumn>
                    <TableHeaderColumn>11.01.2019</TableHeaderColumn>
                    <TableRowColumn>Мурза Абдукаримов</TableRowColumn>
                    <TableRowColumn>Говори с начальником как с подчиненным!</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);