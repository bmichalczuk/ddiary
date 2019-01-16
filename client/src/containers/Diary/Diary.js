import React, {Component} from "react";
import styled from "styled-components";
import DiaryEntry from "../../components/DiaryEntry/DiaryEntry";
export class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: ""};
    }
    render() {
        return (
            <section className={this.props.className}>
                <nav>
                    <ol>
                        <li>1</li>
                        <li>3</li>
                        <li>4</li>
                    </ol>
                </nav>
                <DiaryEntry />
                
            </section>
        );
    }
};

const StyledDiary = styled(Diary)``;
export default StyledDiary;