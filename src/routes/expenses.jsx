import styles from './expenses.module.css'
import React from "react";

const containerStyle = {
    height: "80px",
    marginTop: "20px"
};

/* 一是引入css  二是事件响应 三是state和props */
// 仿照antd的navbar
const arr = ['nav1', 'nav2', 'nav3', 'nav4', 'nav5'];

class Expenses extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chosedNav: "nav1" };

        // This binding is necessary to make `this` work in the callback
        this.onClickNav = this.onClickNav.bind(this);
    }

    componentDidMount() {
    }

    shouldComponentUpdate() {
        return true
    }

    componentWillUnmount() {
    }

    onClickNav(e, d) {
        this.setState(prevState => ({
            chosedNav: d
        }));
    }

    render() {
        const navs = arr.map((d, i) => {
            return (<span key={i} className={styles.nav_item} onClick={(e) => this.onClickNav(e, d)}>
                {d}
            </span>)
        })

        return (
            <div style={{}}>
                <div style={containerStyle}>
                    {navs}
                </div>
                <div>
                    {this.state.chosedNav}
                </div>
            </div>
        );
    }
}

export default Expenses;