import React, {  useState } from "react";
import "./filterDate.scss";
import { DatePicker, Input } from "antd";
import { CalendarOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";


const FilterDate = () => {
  const { RangePicker } = DatePicker;
    
  const [selectedDates,setSelectedDates]= useState()

  const handleDateChange = (dates, dateStrings) => {
    console.log("Seçilen Tarih Aralığı:", dateStrings);
    setSelectedDates(dates); 
  };

 

  return (
    <div className="filter-comp">
      <div className="filter-hotel">
      <Input  style={{
        width: 350,
        height:60
      }} placeholder="Nereye Gitmek İstersin?" prefix={<SearchOutlined /> } />
      </div>
      <div className="filter-date">
        <RangePicker
          onChange={handleDateChange}
      
          format="YYYY-MM-DD" 
          suffixIcon={<CalendarOutlined style={{ color: "blue" }} />}
          style={{
            width: 350,
            height:60
          }}
        />
      </div>
      <div className="user-filter">
      <Input  style={{
        width: 350,
        height:60
      }} placeholder="default size" prefix={<UserOutlined />} />

      </div>
    </div>
  );
};

export default FilterDate;
