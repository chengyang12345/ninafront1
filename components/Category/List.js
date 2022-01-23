import List from '../Goods/List'
export default function SortBar() {
  return (
    <div className=" content col-sm-9">
     
      <div className="grid-list-wrapper">
        <List showMore={false}/>
      </div>
    </div>
  );
}
