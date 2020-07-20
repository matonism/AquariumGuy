'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentSection = function (_React$Component) {
    _inherits(ContentSection, _React$Component);

    function ContentSection(props) {
        _classCallCheck(this, ContentSection);

        var _this = _possibleConstructorReturn(this, (ContentSection.__proto__ || Object.getPrototypeOf(ContentSection)).call(this, props));

        _this.handleClick = function (e) {
            debugger;
            console.log(_this);
            alert('button was clicked');
        };

        _this.changeContent = function () {
            var indexOfCurrentMessage = _this.contentScrollOptions.indexOf(_this.state.shownContent);
            if (indexOfCurrentMessage == _this.contentScrollOptions.length - 1) {
                indexOfCurrentMessage = 0;
            } else {
                indexOfCurrentMessage++;
            }

            _this.setState({ shownContent: _this.contentScrollOptions[indexOfCurrentMessage] });
        };

        _this.contentScrollOptions = [props.contentText, 'This is for Josh', 'I am too kind to that guy'];
        _this.state = {
            shownContent: props.contentText
        };
        return _this;
    }

    _createClass(ContentSection, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.timerID = setInterval(function () {
                return _this2.changeContent();
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('unmounting');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    this.state.shownContent
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleClick },
                    'Click me'
                )
            );
        }
    }]);

    return ContentSection;
}(React.Component);