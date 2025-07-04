import React, { useState } from "react";
import classnames from "classnames";
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Widget from "../../../components/Widget/Widget";
import * as Icons from "@material-ui/icons";
import "font-awesome/css/font-awesome.min.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "eva-icons/style/eva-icons.css";
import s from "./IconsPage.module.scss";

export default function IconsPage() {
  const [activeTab, setActiveTab] = useState("1")

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  return (
    <Widget className="widget-p-md">
      <Nav tabs className="mb-4">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1"})}
            onClick={() => {toggleTab("1"); }}
          >
            <div className="headline-3">Eva Icons</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2"})}
            onClick={() => {toggleTab("2"); }}
          >
            <div className="headline-3">Material Icons</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3"})}
            onClick={() => {toggleTab("3"); }}
          >
            <div className="headline-3">Font Awesome</div>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className={s.iconList}>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-github"/><span>GitHub</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-award"/><span>Award</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-activity"/><span>Activity</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-archive"/><span>Archive</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-battery"/><span>Battery</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-behance"/><span>Behance</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-bell"/><span>Bell</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-book"/><span>Book</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-browser"/><span>Browser</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-bookmark"/><span>Bookmark</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-bulb"/><span>Bulb</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-brush"/><span>Brush</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-calendar"/><span>Calendar</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-camera"/><span>Camera</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-car"/><span>Car</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-cast"/><span>Cast</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-checkmark"/><span>Checkmark</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-clipboard"/><span>Clipboard</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-clock"/><span>Clock</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-close"/><span>Close</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-code"/><span>Code</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-compass"/><span>Compass</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-copy"/><span>Copy</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-crop"/><span>Crop</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-cube"/><span>Cube</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-download"/><span>Download</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-droplet"/><span>Droplet</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-edit"/><span>Edit</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-email"/><span>Email</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-expand"/><span>Expand</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-eye"/><span>Eye</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-facebook"/><span>Facebook</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-file"/><span>File</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-film"/><span>Film</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-flag"/><span>Flag</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-flash"/><span>Flash</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-flip"/><span>Flip</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-folder"/><span>Folder</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-funnel"/><span>Funnel</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-list"/><span>List</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-gift"/><span>Gift</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-globe"/><span>Globe</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-grid"/><span>Grid</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-hash"/><span>Hash</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-heart"/><span>Heart</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-home"/><span>Home</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-image"/><span>Image</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-inbox"/><span>Inbox</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-info"/><span>Info</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-keypad"/><span>Keypad</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-layers"/><span>Layers</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-layout"/><span>Layout</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-link"/><span>Link</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-lock"/><span>Lock</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-map"/><span>Map</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-menu"/><span>Menu</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-mic"/><span>Mic</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-monitor"/><span>Monitor</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-moon"/><span>Moon</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-move"/><span>Move</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-music"/><span>Music</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-navigation"/><span>Navigation</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-npm"/><span>Npm</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-options"/><span>Options</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-pantone"/><span>Pantone</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-people"/><span>People</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-percent"/><span>Percent</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-person"/><span>Person</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-phone"/><span>Phone</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-pin"/><span>Pin</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-plus"/><span>Plus</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-power"/><span>Power</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-pricetags"/><span>Pricetags</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-printer"/><span>Printer</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-radio"/><span>Radio</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-recording"/><span>Recording</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-refresh"/><span>Refresh</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-repeat"/><span>Repeat</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-save"/><span>Save</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-scissors"/><span>Scissors</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-search"/><span>Search</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-settings"/><span>Settings</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-shake"/><span>Shake</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-share"/><span>Share</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-shield"/><span>Shield</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-shuffle"/><span>Shuffle</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-smartphone"/><span>Smartphone</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-speaker"/><span>Speaker</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-star"/><span>Star</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-sun"/><span>Sun</span></Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <div>
            <Row className={s.iconList}>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AccessAlarm /><span>AccessAlarm</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AccessAlarms /><span>AccessAlarms</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Accessibility /><span>Accessibility</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Accessible /><span>Accessible</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AccessAlarms /><span>AccessAlarms</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AccessibleForward /><span>AccessibleForward</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AccessTime /><span>AccessTime</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AccountBalance /><span>AccountBalance</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Chat /><span>Chat</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AccountBox /><span>AccountBox</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AccountCircle /><span>AccountCircle</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AcUnit /><span>AcUnit</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Adb /><span>Adb</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Adjust /><span>Adjust</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Games /><span>Games</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.GitHub /><span>GitHub</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Money /><span>Money</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Nfc /><span>Nfc</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Facebook /><span>Facebook</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Telegram /><span>Telegram</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Toys /><span>Toys</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Deck /><span>Deck</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Dashboard /><span>Dashboard</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Wifi /><span>Wifi</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Airplay /><span>Airplay</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AirportShuttle /><span>AirportShuttle</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Alarm /><span>Alarm</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Album /><span>Album</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AllInbox /><span>AllInbox</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AllInclusive /><span>AllInclusive</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AllOut /><span>AllOut</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AlternateEmail /><span>AlternateEmail</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Android /><span>Android</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Apps /><span>Apps</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Archive /><span>Archive</span></Col>

              <Col xs={12} sm={4} md={3} lg={2}><Icons.Code /><span>Code</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Cake /><span>Cake</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Dns /><span>Dns</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Flag /><span>Flag</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Grain /><span>Grain</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Http /><span>Http</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Link /><span >Link</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Opacity /><span>Opacity</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Person /><span>Person</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Palette /><span>Palette</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Panorama /><span>Panorama</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Router /><span>Router</span></Col>

              <Col xs={12} sm={4} md={3} lg={2}><Icons.ArtTrack /><span>ArtTrack</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AspectRatio /><span>AspectRatio</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Assessment /><span>Assessment</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Assignment /><span>Assignment</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AssignmentInd /><span>AssignmentInd</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AssignmentLate /><span>AssignmentLate</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AssignmentReturn /><span>AssignmentReturn</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AssignmentReturned /><span>AssignmentReturned</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AssignmentTurnedIn /><span>AssignmentTurnedIn</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Assistant /><span>Assistant</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AssistantPhoto /><span>AssistantPhoto</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Atm /><span>Atm</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AttachFile /><span>AttachFile</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Attachment /><span>Attachment</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AttachMoney /><span>AttachMoney</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Audiotrack /><span>Audiotrack</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Autorenew /><span>Autorenew</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AvTimer /><span>AvTimer</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Backspace /><span>Backspace</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Backup /><span>Backup</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Ballot /><span>Ballot</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.BarChart /><span>BarChart</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Battery20 /><span>Battery20</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Battery30 /><span>Battery30</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Battery50 /><span>Battery50</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Battery60 /><span>Battery60</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Battery80 /><span>Battery80</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Battery90 /><span>Battery90</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryAlert /><span>BatteryAlert</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryCharging20 /><span>BatteryCharging20</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryCharging30 /><span>BatteryCharging30</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryCharging50 /><span>BatteryCharging50</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryCharging60 /><span>BatteryCharging60</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryCharging80 /><span>BatteryCharging80</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryCharging90 /><span>BatteryCharging90</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryChargingFull /><span>BatteryChargingFull</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryFull /><span>BatteryFull</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryStd /><span>BatteryStd</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryUnknown /><span>BatteryUnknown</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.BeachAccess /><span>BeachAccess</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Beenhere /><span>Beenhere</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Block /><span>Block</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Bluetooth /><span>Bluetooth</span></Col>
            </Row>
          </div>
        </TabPane>
        <TabPane tabId="3">
          <div>
            <Row className={s.iconList}>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-bed" /><span>Bed</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-bank" /><span>Bank</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-behance" /><span>Behance</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-ban" /><span>Ban</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-bomb" /><span>Bomb</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-building" /><span>Building</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-cab" /><span>Cab</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-child" /><span>Car</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-bed" /><span>Child</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-bath" /><span>Bath</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-circle" /><span>Circle</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-codepen" /><span>Codepen</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-cube" /><span>Cubes</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-database" /><span>Database</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-delicious" /><span>Delicious</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-deviantart" /><span>Deviantart</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-digg" /><span>Digg</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-empire" /><span>Empire</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-envelope" /><span>Envelope</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-fax" /><span>Fax</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file" /><span>File</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-amazon" /><span>Amazon</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-android" /><span>Android</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-apple" /><span>Apple</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-beer" /><span>Beer</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-bolt" /><span>Bolt</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-child" /><span>Child</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-chrome" /><span>Chrome</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-contao" /><span>Contao</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-yahoo" /><span>Yahoo</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-diamond" /><span>Diamond</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-cloud" /><span>Cloud</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-code" /><span>Code</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-codepen" /><span>Codepen</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-git" /><span>Git</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-github" /><span>Github</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-gitlab" /><span>Gitlab</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-gittip" /><span>Gittip</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-header" /><span>Header</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-history" /><span>History</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-institution" /><span>Institution</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-joomla" /><span>Joomla</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-jsfiddle" /><span>Jsfiddle</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-language" /><span>Language</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-drupal" /><span>Drupal</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-dropbox" /><span>Dropbox</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-etsy" /><span>Etsy</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-empire" /><span>Empire</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-openid" /><span>Openid</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-envira" /><span>Envira</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-eraser" /><span>eraser</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-paragraph" /><span>Paragraph</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-paw" /><span>Paw</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-euro" /><span>Euro</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-female" /><span>Female</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-film" /><span>Film</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-qq" /><span>Qq</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-renren" /><span>Renren</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-rebel" /><span>Rebel</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-recycle" /><span>Recycle</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-reddit" /><span>Reddit</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-firefox" /><span>Firefox</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-send" /><span>Send</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-flask" /><span>Flask</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-flickr" /><span>Flickr</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-imdb" /><span>Imdb</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-slack" /><span>Slack</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-sliders" /><span>Sliders</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-soundcloud" /><span>Soundcloud</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-safari" /><span>Safari</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-spoon" /><span>Spoon</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-spotify" /><span>Spotify</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-steam" /><span>Steam</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-sheqel" /><span>Sheqel</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-terminal" /><span>Terminal</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-snapchat" /><span>Snapchat</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-support" /><span>Support</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-taxi" /><span>Taxi</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa la-patreon" /><span>Patreon</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-tree" /><span>Tree</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-university" /><span>University</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-vine" /><span>Wine</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-wechat" /><span>Wechat</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-css3" /><span>CSS3</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-wordpress" /><span>Wordpress</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-yahoo" /><span>Yahoo</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-telegram" /><span>Telegram</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-weibo" /><span>Weibo</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-houzz" /><span>Houzz</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-html5" /><span>HTML5</span></Col>
            </Row>
          </div>
        </TabPane>
      </TabContent>
    </Widget>
  );
}
