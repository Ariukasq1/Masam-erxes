import React from "react";
import axios from "axios";
import Config from "../../config";
import Link from "next/link";
import { Row } from "antd";

class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headerMenu: [], activePage: 0 };
  }

  componentDidMount() {
    axios
      .get(`${Config.apiUrl}/menus/v1/menus/header-menu`)
      .then((res) =>
        this.setState({
          headerMenu: res.data,
          loading: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { activePage } = this.state;

    return (
      <Row className="main-header">
        <div className="logo">
          <img src="images/home/masamLogo.png" />
        </div>
        <Link href="/">
          <a
            className={`${activePage === 0 ? "active" : ""}`}
            onClick={() => this.setState({ activePage: 0 })}
          >
            <p>Нүүр</p>
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`${activePage === 1 ? "active" : ""}`}
            onClick={() => this.setState({ activePage: 1 })}
          >
            <p>Төслийн тухай</p>
          </a>
        </Link>
        <Link href="/news">
          <a
            className={`${activePage === 2 ? "active" : ""}`}
            onClick={() => this.setState({ activePage: 2 })}
          >
            <p>Мэдээ</p>
          </a>
        </Link>
        <Link href="/partners">
          <a
            className={`${activePage === 3 ? "active" : ""}`}
            onClick={() => this.setState({ activePage: 3 })}
          >
            <p>Бүтээгч түншүүд</p>
          </a>
        </Link>
        <Link href="/knowledgebase">
          <a
            className={`${activePage === 4 ? "active" : ""}`}
            onClick={() => this.setState({ activePage: 4 })}
          >
            <p>Мэдлэгийн сан</p>
          </a>
        </Link>
      </Row>
    );
  }
}

export default MenuComponent;
