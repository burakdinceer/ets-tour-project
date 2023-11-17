import React, { useState } from "react";
import "./filterDate.scss";
import { DatePicker, Input, Button, Modal, AutoComplete } from "antd";
import { CalendarOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";



const hotelData = [
  { name: "Otel 1", description: "Açıklama 1" },
  { name: "Otel 2", description: "Açıklama 2" },
  
];




const FilterDate = () => {
  const { control, handleSubmit } = useForm();
  const [formData, setFormData] = useState({});
  const [options, setOptions] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const onSubmit = (data) => {
    
    console.log("Form Verileri:", data);
    setFormData(data);

   

  };

  


  const onSearch = (value) => {
    const filteredOptions = hotelData
      .filter((hotel) => hotel.name.toLowerCase().includes(value.toLowerCase()))
      .map((hotel) => ({
        value: hotel.name,
        label: hotel.name,
      }));
    setOptions(filteredOptions);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="filter-comp">
      <div className="filter-hotel">
        <Controller
          control={control}
          name="destination"
          render={({ field }) => (
            <>
              <AutoComplete
                {...field}
                options={options}
                onSelect={(value) => setSelectedHotel(value)}
                onSearch={onSearch}
                style={{
                  width: 350,
                  height: 60,
                }}
                placeholder="Otel Seçin"
              />
            </>
          )}
        />
      </div>
      <div className="filter-date">
        <Controller
          control={control}
          name="dateRange"
          defaultValue={[]}
          render={({ field: { value, onChange } }) => (
            <DatePicker.RangePicker
              value={value}
              onChange={(dates, dateStrings) => {
                onChange(dates);
              }}
              format="YYYY-MM-DD"
              suffixIcon={<CalendarOutlined style={{ color: "blue" }} />}
              style={{
                width: 350,
                height: 60,
              }}
            />
          )}
        />
      </div>
      <div className="user-filter">
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <Input
              {...field}
              style={{
                width: 200,
                height: 60,
              }}
              placeholder="Kullanıcı Adı"
              prefix={<UserOutlined />}
            />
          )}
        />
      </div>
      <Button  style={{
                width: 150,
                height: 60,
                background:'#0FC4CF'
              }} type="primary" htmlType="submit">
        ARA
      </Button>
     
    </form>
    
  );
};

export default FilterDate;
