import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { Table } from 'rsuite';
 
const { Column, HeaderCell, Cell } = Table;

const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
`

class DayOfTheWeekCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            segunda:"",
            terca:"",
            quarta:"",
            quinta:"",
            sexta:"",
            sabado:"",
            domingo:""
        };
    }
    render() {
        return (
            <StyledContainer>
                <h1>Day of the week card</h1>
                <Table
                    height={400}
                    //data={}
                    onRowClick={data => {
                        console.log(data);
                    }}
                >
                    <Column width={200} align="center" fixed>
                        <HeaderCell>Segunda-Feira</HeaderCell>
                        <Cell dataKey="segunda" />
                    </Column>

                    <Column width={200} fixed>
                        <HeaderCell>Terça-feira</HeaderCell>
                        <Cell dataKey="terca" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Quarta-feira</HeaderCell>
                        <Cell dataKey="quarta" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Quinta-feira</HeaderCell>
                        <Cell dataKey="quinta" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Sexta-feira</HeaderCell>
                        <Cell dataKey="sexta" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Sábado</HeaderCell>
                        <Cell dataKey="sabado" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Domingo</HeaderCell>
                        <Cell dataKey="domingo" />
                    </Column>
                </Table>
            </StyledContainer >
        )
    }
}

export default connect()(DayOfTheWeekCard);