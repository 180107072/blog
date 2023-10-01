import { allWorks } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdx/MDXComponents";

import css from "./page.module.scss";
import Link from "next/link";

export default function Works() {
  return (
    <article className={css.container}>
      <div>
        <img
          src="https://assets.codepen.io/12005/windmill.jpg"
          alt="A windmill"
        />
        <span>
          <a href="#">1</a>
        </span>
      </div>
      <div>
        <img
          src="https://assets.codepen.io/12005/suspension-bridge.jpg"
          alt="The Clifton Suspension Bridge"
        />
        <span>
          <a href="#">2</a>
        </span>
      </div>
      <div>
        <img
          src="https://assets.codepen.io/12005/sunset.jpg"
          alt="Sunset and boats"
        />
        <span>
          <a href="#">3</a>
        </span>
      </div>
      <div>
        <img
          src="https://assets.codepen.io/12005/snowy.jpg"
          alt="a river in the snow"
        />
        <span>
          <a href="#">4</a>
        </span>
      </div>
      <div>
        <img
          src="https://assets.codepen.io/12005/bristol-balloons1.jpg"
          alt="a single checked balloon"
        />
        <span>
          <a href="#">5</a>
        </span>
      </div>
      <div>
        <img
          src="https://assets.codepen.io/12005/dog-balloon.jpg"
          alt="a hot air balloon shaped like a dog"
        />
        <span>
          <a href="#">6</a>
        </span>
      </div>
      <div>
        <img
          src="https://assets.codepen.io/12005/abq-balloons.jpg"
          alt="View from a hot air balloon of other balloons"
        />
        <span>
          <a href="#">7</a>
        </span>
      </div>
      <div>
        <img
          src="https://assets.codepen.io/12005/disney-balloon.jpg"
          alt="a balloon fairground ride"
        />
        <span>
          <a href="#">8</a>
        </span>
      </div>
      <div>
        <img
          src="https://assets.codepen.io/12005/bristol-harbor.jpg"
          alt="sunrise over a harbor"
        />
        <span>
          <a href="#">9</a>
        </span>
      </div>
      <div>
        <img
          src="https://assets.codepen.io/12005/bristol-balloons2.jpg"
          alt="three hot air balloons in a blue sky"
        />
        <span>
          <a href="#">10</a>
        </span>
      </div>
      <div>
        <img
          src="https://assets.codepen.io/12005/toronto.jpg"
          alt="the Toronto light up sign at night"
        />
        <span>
          <a href="#">11</a>
        </span>
      </div>
    </article>
  );
}
