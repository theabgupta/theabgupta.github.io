import React from 'react';
import './ContactSection.scss';


class Icon extends React.Component {
	render() {
		var item = this.props.itemProp;
		return (
			<a href={item.url} className="btn btn-link" target="_blank">
				<i className={item.icon}></i>
			</a>
		);
	}
}


class SocialMedia extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      socialMedias: [
      	{
          'url': 'https:\//www.facebook.com/theabgupta',
          'icon': 'fa fa-facebook fa-lg'
      	},
      	{
          'url': 'https:\//instagram.com/theabgupta/',
          'icon': 'fa fa-instagram fa-lg'
      	},
      	{
          'url': 'https:\//www.linkedin.com/in/theabgupta',
          'icon': 'fa fa-linkedin fa-lg'
      	},
      	{
          'url': 'https:\//github.com/thaebgupta',
          'icon': 'fa fa-github fa-lg'
      	},
      	{
          'url': 'https:\//medium.com/@theabgupta',
          'icon': 'fa fa-medium fa-lg'
      	},
      ],
    }
 	};

  render() {
  	var items1 = this.state.socialMedias.slice(0,4);
    var itemsList1 = items1.map((item, index) =>
	    									<li className="grow" key={index}>
													<Icon itemProp={item}/>
												</li>
											);
    var items2 = this.state.socialMedias.slice(4);
    var itemsList2 = items2.map((item, index) =>
	    									<li className="grow" key={index}>
													<Icon itemProp={item}/>
												</li>
											);
    return (
      <div className="row">
				<div className="social-icons text-center">
					<div>
						<ul className="list-inline list-social">
							{itemsList1}
						</ul>
					</div>
					<div>
						<ul className="list-inline list-social">
							{itemsList2}
						</ul>
					</div>
				</div>
			</div>
    );
  }
}

export default SocialMedia;
