import React from "react";
import Head from "next/head"
import { Menu, Container, Icon, Dropdown } from "semantic-ui-react";

export default function TopBar() {
  return (
    <>
    <Head>
      <title>Mateusz Kojro - Personal Website</title>
    </Head>
      <Menu fixed="top" compact inverted style={{ fontSize: "1.15em" }}>
        <Container>
          <Menu.Item as="a" href="/" header>
            <Icon size="big" margin="2em" name="code" />
            Mateusz Kojro
          </Menu.Item>
          <Menu.Item as="a" href="/">Home</Menu.Item>
          <Menu.Item as="a" href="https://github.com/mateuszkojro">Github</Menu.Item>
          <Menu.Item as="a" href="/about">
            About me
          </Menu.Item>
          <Menu.Item as="a" href="/gallery">
            Project Gallery
          </Menu.Item>
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
    </>
  );
}
