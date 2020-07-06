import React, { useState } from "react";
import axios from "axios";
import "./styles.scss";
import { Card, Button, Tooltip } from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import * as data from "./backup.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faTv, faScroll } from "@fortawesome/free-solid-svg-icons";
const TestB = () => {
  const public_key = "7a910676308a273c0e9b02875ff0cb2c";
  const [listHeroes, setListHeroes] = useState([]);
  async function getHeroes() {
    const url =
      "https://gateway.marvel.com:443/v1/public/characters?limit=30&apikey=7a910676308a273c0e9b02875ff0cb2c";

    // await axios.get(url,{apikey:public_key}).then((resp) => {
    //   console.log(resp);
    //   setListHeroes(resp.data.data.results)
    // });
    setListHeroes(data.default.data.results);
  }
  function renderTooltip(props) {
    return (
      <Tooltip style={{borderRadius:5,backgroundColor:'red',padding:1, width:'10vw',color:'#fff',textAlign:'center'}} id="button-tooltip" {...props}>
        {props.type}
      </Tooltip>
    );
  }
  return (
    <>
      <div className="testB-container">
        <button
          onClick={() => {
            getHeroes();
          }}
        >
          Cargar Heroes
        </button>

        <div className="grilla">
          {listHeroes.map((heroe) => (
            <Card className="item">
              <Card.Img
                variant="top"
                src={heroe.thumbnail.path + "." + heroe.thumbnail.extension}
                className="cardImage"
              />
              <Card.Body className="card-body">
                <Card.Title>
                  <h4>{heroe.name}</h4>
                </Card.Title>
                <Card.Text className="content">
                  Descripcion:
                  <p>
                    {heroe.description.length > 0
                      ? heroe.description.substring(0, 99) + "..."
                      : "Aun no tengo descripción"}
                  </p>
                </Card.Text>
                <Card.Footer className="footer">
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 150, hide: 300 }}
                    overlay={renderTooltip({cant:heroe.comics.available,type:'comics'})}
                  >
                     <div className="info">
                    {heroe.comics.available} <FontAwesomeIcon icon={faBook} />
                  </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 150, hide: 300 }}
                    overlay={renderTooltip({cant:heroe.series.available,type:'series'})}
                  >
                     <div className="info">
                    {heroe.series.available} <FontAwesomeIcon icon={faTv} />
                  </div>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 150, hide: 300 }}
                    overlay={renderTooltip({cant:heroe.stories.available,type:'stories'})}
                  >
                     <div className="info">
                    {heroe.stories.available}{" "}
                    <FontAwesomeIcon icon={faScroll} />
                  </div>
                  </OverlayTrigger>
                 
                 
                 
                </Card.Footer>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestB;
