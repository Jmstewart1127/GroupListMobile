import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, List, ListItem, Text, Icon, Right } from 'native-base';
export default class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    }
  }

  getAllLists = () => {
    fetch('https://group-list-api.herokuapp.com/api/get/lists/')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          lists: responseJson,
        });
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    console.log("sup");
    this.getAllLists();
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <List>
                {this.state.lists.map((list) => {
                  return(
                    <ListItem>
                      <Text>{list.listName}</Text>
                    </ListItem>
                  );
                })}
              </List>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}