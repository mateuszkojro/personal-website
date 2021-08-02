import React, { useState } from "react";
import Head from "next/head"
import { Menu, Container, Icon, Dropdown, Grid, Button, Segment, Sidebar } from "semantic-ui-react";


export default function TopBar() {
  return (
    <>
      <Head>
        <title>Mateusz Kojro - Personal Website</title>
      </Head>
      <Grid >
        <Grid.Row only="computer tablet">
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
            </Container>
          </Menu>

        </Grid.Row>
        <Grid.Row only="mobile">
          <Menu fixed="top" compact inverted style={{ fontSize: "1.15em" }}>



              <Dropdown icon="bars" item simple>
                <Dropdown.Menu>
                  <Dropdown.Item as="a" href="/">Home</Dropdown.Item>
                  <Dropdown.Item as="a" href="https://github.com/mateuszkojro">Github</Dropdown.Item>
                  <Dropdown.Item as="a" href="/about">
                    About me
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="/gallery">
                    Project Gallery
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            <Menu.Item as="a" href="/" header position="right">
              <Icon size="big" margin="2em" name="code" />
              Mateusz Kojro
            </Menu.Item>

          </Menu>
        </Grid.Row>
        
      </Grid>
    </>
  );
}
