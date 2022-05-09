import React from "react";
import "../style/Order.css";
import img from "../asset/pikacu.jpeg";

export default function OrderSecondlist() {
  return (
    <div >
    {/* className="bg-light" */}
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <form class="d-flex">
            <input
              class="form-control inse"
              type="search"
              placeholder="Search your orders here"
            />
            <button class="btn btn-primary" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>Search Orders
            </button>
          </form>
        </div>
      </nav>


      <div class="card rd">
        <div class="card-body igm">
          <img src={img} width="90" />
          <div className="pica">
            <h5>
              <b>Pikachu Toy</b>
            </h5>
            <p>
              Cotton Toy for childrens <br />
              Lorem, ipsum dolor.
            </p>
          </div>
          <div className="price">
              <h4><b>$40.99</b></h4>
          </div>
          <div className="status">
            <h3><b> Delivered on April 4,2022</b></h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="card rd">
        <div class="card-body igm">
          <img src={img} width="90" />
          <div className="pica">
            <h5>
              <b>Pikachu Toy</b>
            </h5>
            <p>
              Cotton Toy for childrens <br />
              Lorem, ipsum dolor.
            </p>
          </div>
          <div className="price">
              <h4><b>$40.99</b></h4>
          </div>
          <div className="status">
            <h3><b> Delivered on April 4,2022</b></h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="card rd">
        <div class="card-body igm">
          <img src={img} width="90" />
          <div className="pica">
            <h5>
              <b>Pikachu Toy</b>
            </h5>
            <p>
              Cotton Toy for childrens <br />
              Lorem, ipsum dolor.
            </p>
          </div>
          <div className="price">
              <h4><b>$40.99</b></h4>
          </div>
          <div className="status">
            <h3><b> Delivered on April 4,2022</b></h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="card rd">
        <div class="card-body igm">
          <img src={img} width="90" />
          <div className="pica">
            <h5>
              <b>Pikachu Toy</b>
            </h5>
            <p>
              Cotton Toy for childrens <br />
              Lorem, ipsum dolor.
            </p>
          </div>
          <div className="price">
              <h4><b>$40.99</b></h4>
          </div>
          <div className="status">
            <h3><b> Delivered on April 4,2022</b></h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="card rd">
        <div class="card-body igm">
          <img src={img} width="90" />
          <div className="pica">
            <h5>
              <b>Pikachu Toy</b>
            </h5>
            <p>
              Cotton Toy for childrens <br />
              Lorem, ipsum dolor.
            </p>
          </div>
          <div className="price">
              <h4><b>$40.99</b></h4>
          </div>
          <div className="status">
            <h3><b> Delivered on April 4,2022</b></h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="card rd">
        <div class="card-body igm">
          <img src={img} width="90" />
          <div className="pica">
            <h5>
              <b>Pikachu Toy</b>
            </h5>
            <p>
              Cotton Toy for childrens <br />
              Lorem, ipsum dolor.
            </p>
          </div>
          <div className="price">
              <h4><b>$40.99</b></h4>
          </div>
          <div className="status">
            <h3><b> Delivered on April 4,2022</b></h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="card rd">
        <div class="card-body igm">
          <img src={img} width="90" />
          <div className="pica">
            <h5>
              <b>Pikachu Toy</b>
            </h5>
            <p>
              Cotton Toy for childrens <br />
              Lorem, ipsum dolor.
            </p>
          </div>
          <div className="price">
              <h4><b>$40.99</b></h4>
          </div>
          <div className="status">
            <h3><b> Delivered on April 4,2022</b></h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
