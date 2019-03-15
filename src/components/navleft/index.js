import React from 'react';
import menuList from "./../../config/menuList";
import {Menu, Icon} from 'antd';
//import './../../style/common.less'
import './index.less'

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
export default class NavLeft extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            MenuList: {},
        }

    }

    componentWillMount() {
        let menuTreeNode = this.renderMenu(menuList);
        this.setState({
            menuTreeNode: menuTreeNode,
        })
    }

    renderMenu = (data) => {
        return data.map((item) => {
            {
                if (item.children) {
                    return (
                        <SubMenu title={item.title} key={item.key}>
                            {this.renderMenu(item.children)}
                        </SubMenu>
                    )
                }
                return <Item key={item.key}>{item.title}</Item>
            }
        });
    }

    render() {
        return (
            <div>
                <div className="log">
                    <img src='/assets/logo-ant.svg' alt=''/>
                    <h1>IMoos MS</h1>
                </div>
                <div className="">
                    <Menu theme='dark' >
                        {this.state.menuTreeNode}
                    </Menu>
                </div>

            </div>

        );
    }
}