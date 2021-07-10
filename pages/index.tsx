import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"

const FixedMenu = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          {/* <Image size="mini" src="/logo.png" style={{ marginRight: "1.5em" }} /> */}
          Mateusz Kojro
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>
        <Menu.Item as="a">Github</Menu.Item>
        <Menu.Item as="a">About me</Menu.Item>

        <Dropdown item simple text="Dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  );
};

const Footer = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Some links:
            </Header>
            <p>Something quick</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Sitemap</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">Banana Pre-Order</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default function Home() {
  let [article, changeArticle] = useState("");
  const getReadme = (url: string) => {
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.text();
      })
      .then((text) => {
        console.log(text.toString());
        changeArticle(text);
      });
  };

  return (
    <div>
      <FixedMenu />
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h1" style={{ fontSize: "5em" }}>
                Hi!
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                My name is Mateusz, I am a software engineer studying Physics
                and Computer Science at Univeristy of Lodz in Poland
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              {/* <Image bordered rounded size='large' src='/images/wireframe/white-image.png' /> */}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button
                icon
                labelPosition="left"
                as="a"
                href="/Mateusz_Kojro_CV_en.pdf"
                size="huge"
              >
                <Icon name="file" />
                My CV
              </Button>
              <Button
                icon
                labelPosition="left"
                size="huge"
                as="a"
                href="https://github.com/mateuszkojro"
              >
                <Icon name="github square" />
                Check out my code!
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "Some text"
              </Header>
              <p style={{ fontSize: "1.33em" }}>subtext</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "Some text"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                {/* <Image avatar src='/images/avatar/large/nan.jpg' /> */}
                subtext
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Article 1
          </Header>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{article}</ReactMarkdown>
          <Button
            as="a"
            size="large"
            onClick={() => {
              getReadme(
                `https://raw.githubusercontent.com/mateuszkojro/video_player/master/README.md`
              );
            }}
          >
            Read More
          </Button>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <a href="#">Case Studies</a>
          </Divider>

          <Header as="h3" style={{ fontSize: "2em" }}>
            Section 2
          </Header>
          <p style={{ fontSize: "1.33em" }}>quick info</p>
          <Button as="a" size="large">
            More info
          </Button>
        </Container>
      </Segment>

      <Footer />
    </div>
  );
}
