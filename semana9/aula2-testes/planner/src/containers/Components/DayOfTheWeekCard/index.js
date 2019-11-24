import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { Table } from 'rsuite';


const { Column, HeaderCell, Cell } = Table;

const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
`

const DayOfTheWeekCard = (props) => {

    return (
        <StyledContainer>
            <Table
                height={400}
            >
                <Column width={200} align="center" fixed>
                    <HeaderCell>Segunda-Feira</HeaderCell>
                    <Cell dataKey="segunda"></Cell>
                </Column>

                <Column width={200} fixed>
                    <HeaderCell>Terça-feira</HeaderCell>
                    <Cell dataKey="terca" ></Cell>
                </Column>

                <Column width={200}>
                    <HeaderCell>Quarta-feira</HeaderCell>
                    <Cell dataKey="quarta" ></Cell>
                </Column>

                <Column width={200}>
                    <HeaderCell>Quinta-feira</HeaderCell>
                    <Cell dataKey="quinta" ></Cell>
                </Column>

                <Column width={200}>
                    <HeaderCell>Sexta-feira</HeaderCell>
                    <Cell dataKey="sexta" ></Cell>
                </Column>

                <Column width={200}>
                    <HeaderCell>Sábado</HeaderCell>
                    <Cell dataKey="sabado" ></Cell>
                </Column>

                <Column width={200}>
                    <HeaderCell>Domingo</HeaderCell>
                    <Cell dataKey="domingo" ></Cell>
                </Column>
            </Table>
        </StyledContainer >
    )
}

function mapStateToProps(state) {
    return {
        planners: state.segunda.planners,
    }
}

export default connect(mapStateToProps)(DayOfTheWeekCard);