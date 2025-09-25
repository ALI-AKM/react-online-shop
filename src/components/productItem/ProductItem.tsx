import styled from "./ProductItem.module.css"
function ProductItem() {
  return (
    <>
      <div className={`${styled.ProductItem} flex flex-col border border-fourth rounded-md shadow-md hover:shadow-2xl bg-white`}>
        <div className="overflow-hidden">
          <img
            className={`rounded`}
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <h3 className="font-bold">نام محصول</h3>
        <div>
          <p className="font-medium">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برا
          </p>
        </div>
        <span className="font-medium">قیمت:12000</span>
      </div>
    </>
  );
}

export default ProductItem;
