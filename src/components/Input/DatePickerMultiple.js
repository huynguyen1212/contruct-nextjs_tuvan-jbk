import React from 'react';
import moment from 'moment';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import styled from 'styled-components';

export default class DatePickerMultiple extends React.Component {
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);

    this.state = {
      from: this.props.start,
      to: this.props.end,
    };
  }

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
    this.props.setData(this.state.from, this.state.to);
  }

  handleFromChange(from) {
    this.setState({ from });
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // console.log('nesProps', nextProps);
    this.setState({
      from: nextProps.start,
      to: nextProps.end,
    });
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    // console.log(this.props);
    return (
      <StyleDateMul>
        <div className="InputFromTo">
          <DayPickerInput
            value={from ? moment(from).format('DD/MM/YYYY') : ''}
            placeholder="Từ"
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { after: to },
              toMonth: to,
              modifiers,
              numberOfMonths: 2,
              onDayClick: () => this.to.getInput().focus(),
            }}
            onDayChange={this.handleFromChange}
          />
          <span className="spread">—</span>
          <DayPickerInput
            ref={el => (this.to = el)}
            value={to ? moment(to).format('DD/MM/YYYY') : ''}
            placeholder="Đến"
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 2,
            }}
            onDayChange={this.handleToChange}
          />
          <IconDatePicker />
        </div>
      </StyleDateMul>
    );
  }
}

const IconDatePicker = () => (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.6667 1.66659H10V0.999919C10 0.633252 9.7 0.333252 9.33333 0.333252C8.96667 0.333252 8.66667 0.633252 8.66667 0.999919V1.66659H3.33333V0.999919C3.33333 0.633252 3.03333 0.333252 2.66667 0.333252C2.3 0.333252 2 0.633252 2 0.999919V1.66659H1.33333C0.593333 1.66659 0.00666667 2.26659 0.00666667 2.99992L0 12.3333C0 13.0666 0.593333 13.6666 1.33333 13.6666H10.6667C11.4 13.6666 12 13.0666 12 12.3333V2.99992C12 2.26659 11.4 1.66659 10.6667 1.66659ZM10.6667 11.6666C10.6667 12.0333 10.3667 12.3333 10 12.3333H2C1.63333 12.3333 1.33333 12.0333 1.33333 11.6666V4.99992H10.6667V11.6666ZM4 6.33325H2.66667V7.66659H4V6.33325ZM5.33333 6.33325H6.66667V7.66659H5.33333V6.33325ZM9.33333 6.33325H8V7.66659H9.33333V6.33325Z"
      fill="#93A9C7"
    />
  </svg>
);

const StyleDateMul = styled.div`
  .spread {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    padding-bottom: 3px;
  }

  .InputFromTo {
    .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
      background-color: #f0f8ff !important;
      color: #4a90e2;
    }
    .DayPicker-Day {
      border-radius: 0 !important;
    }
    .DayPicker-Day--start {
      border-top-left-radius: 50% !important;
      border-bottom-left-radius: 50% !important;
    }
    .DayPicker-Day--end {
      border-top-right-radius: 50% !important;
      border-bottom-right-radius: 50% !important;
    }
    .DayPickerInput-Overlay {
      width: 600px;
      margin-left: -198px;
    }

    @media (max-width: 991px) {
      .DayPickerInput-Overlay {
        width: 350px;
        margin-left: -198px;
      }
      /* responsive day-picker     */
      /* .DayPickerInput-OverlayWrapper {
        background-color: red;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
      } */
    }
  }

  .InputFromTo {
    display: flex;
    max-width: 250px;
    width: 100%;
    height: 32px;
    align-items: center;
    position: relative;
    padding-right: 40px;
    padding-left: 5px;
    background: #ffffff;
    border: 1px solid #e3e8f0;
    box-sizing: border-box;
    border-radius: 2px;

    svg,
    img {
      position: absolute;
      content: '';
      right: 20px;
      top: 8px;
    }
    input {
      width: 100%;
      width: 100%;
      padding: 0;
      margin: 0;
      border: 0;
      text-align: center;
      height: 100%;
      outline: none;

      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;

      /* text phu */

      color: #5f6169;
    }
  }

  .DayPickerInput {
    display: inline-block;
    height: 100%;
  }
`;
