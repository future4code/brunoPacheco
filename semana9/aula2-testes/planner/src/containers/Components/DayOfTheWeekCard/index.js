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
    }
    render() {
        return (
            <StyledContainer>
                <Table
                    height={400}
                >
                    <Column width={200} align="center" fixed>
                        <HeaderCell>Segunda-Feira</HeaderCell>
                        <Cell dataKey="segunda">{this.props.segunda}</Cell>
                    </Column>

                    <Column width={200} fixed>
                        <HeaderCell>Terça-feira</HeaderCell>
                        <Cell dataKey="terca" >{this.props.terca}</Cell>
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Quarta-feira</HeaderCell>
                        <Cell dataKey="quarta" >{this.props.quarta}</Cell>
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Quinta-feira</HeaderCell>
                        <Cell dataKey="quinta" >{this.props.quinta}</Cell>
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Sexta-feira</HeaderCell>
                        <Cell dataKey="sexta" >{this.props.sexta}</Cell>
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Sábado</HeaderCell>
                        <Cell dataKey="sabado" >{this.props.sabado}</Cell>
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Domingo</HeaderCell>
                        <Cell dataKey="domingo" >{this.props.domingo}</Cell>
                    </Column>
                </Table>
            </StyledContainer >
        )
    }
}

function mapStateToProps(state) {
    return {
        segunda: state.segunda,
        terca: state.terca,
        quarta: state.quarta,
        quinta: state.quinta,
        sexta: state.sexta,
        sabado: state.sabado,
        domingo: state.domingo
    }
  }

export default connect(mapStateToProps)(DayOfTheWeekCard);