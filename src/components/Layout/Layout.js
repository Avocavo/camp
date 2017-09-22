import React, { Component } from 'react';
import { AppBar as AppBarRTB,
         Checkbox as CheckboxRTB,
         IconButton as IconButtonRTB,
         Layout as LayoutRTB,
         NavDrawer as NavDrawerRTB,
         Panel as PanelRTB,
         Sidebar as SidebarRTB, } from 'react-toolbox';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { List } from './list';
import { AppBar } from './app_bar';
import { Footer } from './footer';

import { Home } from '../views/home';
import { Signup } from '../views/signup';
import { Login } from '../views/login';
import { Messages } from '../views/messages';
import { Profile } from '../views/profile';

class Layout extends React.Component {
    state = {
        drawerActive: false,
        drawerPinned: false,
        sidebarPinned: false
    };

    toggleDrawerActive = () => {
        this.setState({ drawerActive: !this.state.drawerActive });
    };

    toggleDrawerPinned = () => {
        this.setState({ drawerPinned: !this.state.drawerPinned });
    }

    toggleSidebar = () => {
        this.setState({ sidebarPinned: !this.state.sidebarPinned });
    };

    render() {
        return (
            <LayoutRTB>
                <NavDrawerRTB active={this.state.drawerActive}
                    pinned={this.state.drawerPinned} permanentAt='xxxl'
                    onOverlayClick={ this.toggleDrawerActive }>
                    <List />
                </NavDrawerRTB>

                <PanelRTB>
                    <AppBar />

                    <HashRouter>
                      <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/signup' exact component={Signup} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/messages' exact component={Messages} />
                        <Route path='/profile' exact component={Profile} />
                      </Switch>
                    </HashRouter>

                    <CheckboxRTB label='Pin drawer' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
                    <CheckboxRTB label='Show sidebar' checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
                    <Footer />
                </PanelRTB>

                <SidebarRTB pinned={ this.state.sidebarPinned } width={ 5 }>
                    <div><IconButtonRTB icon='close' onClick={ this.toggleSidebar }/></div>
                    <div style={{ flex: 1 }}>
                        <p>Supplemental content goes here.</p>
                    </div>
                </SidebarRTB>

            </LayoutRTB>
        );
    }
}

export default Layout;
