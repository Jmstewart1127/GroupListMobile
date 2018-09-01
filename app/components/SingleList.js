import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, List, ListItem, Text, Icon, Right } from 'native-base';
export default class SingleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
    }
  }

  getListItemsByListId = () => {
    fetch('https://group-list-api.herokuapp.com/api/get/list/items/' + 5)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          listItems: responseJson,
        });
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    console.log("sup");
    this.getListItemsByListId();
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <List>
                {this.state.listItems.map((item) => {
                  return(
                    <ListItem>
                      <Text>{item.name}</Text>
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