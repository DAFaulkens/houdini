// License: LGPL-3.0-or-later
import * as React from 'react';
import { TabPanel } from "react-aria-tabpanel";
import { observer } from 'mobx-react'
import { WizardTabPanelState} from './wizard_state';
import {computed} from 'mobx';


export interface WizardTabPanelProps {
  tab: WizardTabPanelState
}

export interface WizardPanelProps extends WizardTabPanelProps {
    [props:string]:any
}

@observer
export class WizardPanel extends React.Component<WizardPanelProps, {}> {
    @computed
    get tab():WizardTabPanelState{
        return this.props.tab
    }
    @computed
    get isActive(){
        return this.tab.active
    }
    render() {

        let props = this.props.props ? this.props.props : {}
        return <TabPanel tabId={this.tab.id} active={this.isActive}
        {...props} className="wizard-step">
          {this.props.children}
        </TabPanel>
    }
}

