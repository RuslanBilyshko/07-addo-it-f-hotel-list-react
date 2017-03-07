var React = require('react');
var ReactDOM = require('react-dom');
/*var LifeBlock = require('./life');*/

let hotelList = [

    {
        id: 1005,
        name: "Готельный комплекс \"Киев\"",
        address: "улица Институтская 4, Киев, 01001, Украина",
        start: 3,
        price: 100,
        image: "images/1.jpg"
    },
    {
        id: 1004,
        name: "Готельный комплекс \"Киев\"",
        address: "улица Институтская 4, Киев, 01001, Украина",
        start: 4,
        price: 100,
        image: "images/2.jpg"
    },
    {
        id: 1003,
        name: "Готельный комплекс \"Киев\"",
        address: "улица Институтская 4, Киев, 01001, Украина",
        start: 5,
        price: 100,
        image: "images/3.jpg"
    },
    {
        id: 1002,
        name: "Готельный комплекс \"Киев\"",
        address: "улица Институтская 4, Киев, 01001, Украина",
        start: 3,
        price: 100,
        image: "images/4.jpg"
    },
    {
        id: 1001,
        name: "Готельный комплекс \"Киев\"",
        address: "улица Институтская 4, Киев, 01001, Украина",
        start: 2,
        price: 100,
        image: "images/5.jpg"
    },

];

class Star extends React.Component {

    render() {
        return (
            <span className='star'>&nbsp;</span>
        )
    }
}

class ListRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    render() {

        let starts = [];
        for(var i = 0; i < this.props.data.start; i++)
        {
            starts.push(<Star/>);
        }


        return (
            <div id={this.props.data.id} className='list__row '>
                <div className='list__row__img col-sm-3'>
                    <img src='build/images/1.jpg' alt="" className='img-responsive'/>
                </div>
                <div className='info list__row__info col-sm-9'>
                    <div className='info__button pull-right'>
                        <button className='btn btn-default btn_clear'>&nbsp;</button>
                    </div>
                    <h3 className='info__title'><a href='#'>{this.props.data.name}</a></h3>
                    <div className='info__star'>
                        {starts}
                    </div>
                    <div className='info__address'><p>{this.props.data.address}</p></div>
                    <div className='info__price'>{this.props.data.price} uah</div>
                    <div className='info__button pull-right'>
                        <button id='btn_select' className='btn btn-success'>Select</button>
                    </div>
                </div>
            </div>
        )
    }
}


class HotelList extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            hotelList: hotelList
        }
    }

    render() {

        let rows = this.state.hotelList.map((item) => {
            return (
                <ListRow data={item}/>
            )
        });
        return (
            <div id="list-container" className="list col-sm-12">
                {rows}
            </div>
        );
    }

}


class AddForm extends React.Component {

    render() {
        return (
            <div className="add-hotel-wrapper">
                <h4>Добавить Готель</h4>
                <form id="add-hotel" role="form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input value="Новый  - Готельный комплекс" required="required" type="text"
                               className="form-control" id="name" name="name" placeholder="Enter Name Hotel"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input value="улица Институтская 4, Киев, 01001, Украина" required="required" type="text"
                               className="form-control" id="address" name="address" placeholder="Enter address"/>
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="start">Star count</label>
                            <select className="form-control" name="start" id="start">
                                <option name="1">1</option>
                                <option name="2">2</option>
                                <option name="3">3</option>
                                <option selected="selected" name="4">4</option>
                                <option name="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input value="500" required="required" type="text" className="form-control" id="price"
                               name="price" placeholder="Enter Price"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Price</label>
                        <input value="images/5.jpg" required="required" type="text" className="form-control"
                               placeholder="Enter Image Name (one.jpg)"/></div>

                    <button type="submit" className="btn btn-default">Добавить</button>
                </form>
            </div>
        );
    }
}


class Button extends React.Component {

    onClickElement(event) {

        $.fancybox.open($('.add-hotel-wrapper'));
    }


    render() {
        return (
            <div className="add_button_cintainer" onClick={this.onClickElement.bind(this)}>
                <button className="btn btn-success add-hotel-btn">Добавить Готель</button>
            </div>
        )
    }
}


class App extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor');

        this.state = {
            title: "Hotel List",
        }

    }


    render() {

        return (
            <div>
                <h1>{this.state.title}</h1>
                <Button />
                <AddForm/>
                <HotelList/>
            </div>




        );
    }
}

ReactDOM.render(
    <App />
    ,
    document.getElementById('app')
);

