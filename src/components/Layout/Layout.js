import React, { Component } from 'react';
import { AppBar as AppBarRTB,
         Checkbox as CheckboxRTB,
         IconButton as IconButtonRTB,
         Layout as LayoutRTB,
         NavDrawer as NavDrawerRTB,
         Panel as PanelRTB,
         Sidebar as SidebarRTB, } from 'react-toolbox';
import { List } from '../List';
import { AppBar } from '../AppBar';

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
                    {/* <AppBar leftIcon='menu' onLeftIconClick={ this.toggleDrawerActive } /> */}
                    <AppBar />
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                        <h1>Main Content</h1>
                        <p>Main content goes here.</p>
                        <CheckboxRTB label='Pin drawer' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
                        <CheckboxRTB label='Show sidebar' checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
                    </div>
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
