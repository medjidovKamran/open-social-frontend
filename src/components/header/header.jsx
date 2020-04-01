import React,{Component} from 'react';
import s from './header.module.scss'
import logo from '../../image/header/logo.png'
import HeaderDrop from "./header-drop";

class Header extends Component{
    state={
        openMenu: false
    };

    openMenu= () =>{
        this.setState((state) =>{
            return{
                openMenu: !state.openMenu
            }
        })
    }
    closeMenu = () =>{
        this.setState({
            openMenu: false
        })
    };

    render(){
        const {openMenu} = this.state;
        const mainMenu = openMenu ? <HeaderDrop closeMenu={this.closeMenu}/> : null;
        const clazz =  openMenu ? `${s.button} ${s.active}` : `${s.button}`;
        return (
            <header className={s.header}>
                <div className={s.logo}>
                    <div className={s.logoImg}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className={s.logoName}>
                        Logo
                    </div>
                </div>
                <div onClick={this.openMenu}
                        className={s.buttonWrapper}>
                    <div className={clazz}></div>
                </div>
                {mainMenu}
            </header>
        );
    }

}

export default Header;