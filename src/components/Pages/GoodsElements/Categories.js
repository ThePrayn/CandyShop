import React, { useState } from 'react';
import { Select } from 'antd';

export default function Categories(props) {
  const [categ] = useState([
    { key: 'all', name: 'Все товары' },
    { key: 'Мармелад', name: 'Мармелад' },
    { key: 'Драже', name: 'Драже' },
  ]);

  const handleCategoryChange = (value) => {
    props.getCategory(value);
  };

  return (
    <Select
      defaultValue="Все товары"
      style={{ width: 120 }}
      className="categ"
      onChange={handleCategoryChange}
    >
      {categ.map((el) => (
        <Select.Option key={el.key} value={el.key}>
          {el.name}
        </Select.Option>
      ))}
    </Select>
  );
}