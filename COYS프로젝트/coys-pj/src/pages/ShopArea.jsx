import "../css/shop_area.css";

export function ShopArea() {
  return (
    <section id="shop-area" className="shop-area">
      <div className="msg-box">
        <h1>
          We love <strong>sports</strong>, and we harness the tremendous power of sports in our
          <strong>marketing</strong>. We know exactly what the limitless possibilities the <strong>digital</strong>{" "}
          world offers.
          <br />
          <strong>Creativity</strong> has given rise to award-winning campaigns, activations and platforms.
          <br />
        </h1>
        <h2>
          We <strong>think</strong>
          about it and <strong>make</strong> it.
        </h2>
      </div>
      <div id="kitbox">
        <div className="kitbox">
          <div className="kit">
            <img src="../../public/images/shop/hk01.jpg" alt="hk01" />
            <p>　flex</p>
          </div>
          <div className="kit">
            <img src="../../public/images/shop/ak02.jpg" alt="ak02" />
            <p>　flex</p>
          </div>
          <div className="kit">
            <img src="../../public/images/shop/tk01.jpg" alt="tk01" />
            <p>　flex</p>
          </div>
          <div className="kit">
            <img src="../../public/images/shop/trk02.jpg" alt="trk02" />
            <p>　flex</p>
          </div>
          <div className="kit">
            <img src="../../public/images/shop/hk02.jpg" alt="hk02" />
            <p>　flex</p>
          </div>
          <div className="kit">
            <img src="../../public/images/shop/tk_ban.jpg" alt="hk04" />
            <p>　flex</p>
          </div>
          <div className="kit">
            <img src="../../public/images/shop/hk04.jpg" alt="hk04" />
            <p>　flex</p>
          </div>
        </div>
      </div>
    </section>
  );
}
