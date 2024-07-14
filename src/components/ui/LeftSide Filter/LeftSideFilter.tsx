
import { useForm, Controller } from 'react-hook-form';
import { Slider, Checkbox, Button, Collapse } from 'antd';
// import 'antd/dist/antd.css';

const { Panel } = Collapse;

interface FilterForm {
  priceRange: [number, number];
  availability: string[];
  brands: string[];
}

const LeftSideFilter = () => {
  const { control, handleSubmit } = useForm<FilterForm>({
    defaultValues: {
      priceRange: [0, 2000],
      availability: [],
      brands: [],
    },
  });

  const onSubmit = (data: FilterForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', width: '300px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: 500 }}>Price Range</label>
        <Controller
          name="priceRange"
          control={control}
          render={({ field }) => (
            <Slider
              range
              min={0}
              max={20000}
              value={field.value}
              onChange={field.onChange}
              tooltip={{ formatter: value => `${value}` }}
            />
          )}
        />
      </div>

      <Collapse defaultActiveKey={['1']} style={{ marginBottom: '20px' }}>
        <Panel header="Availability" key="1">
          <Controller
            name="availability"
            control={control}
            render={({ field }) => (
              <Checkbox.Group
                value={field.value}
                onChange={field.onChange}
                style={{display:'flex',flexDirection:"column"}}
                options={['In Stock', 'Pre Order', 'Up Coming']}
              />
            )}
          />
        </Panel>
      </Collapse>

      <Collapse defaultActiveKey={['1']} style={{ marginBottom: '20px' }}>
        <Panel header="Brand" key="1">
          <Controller
            name="brands"
            control={control}
            render={({ field }) => (
              <Checkbox.Group
                value={field.value}
                onChange={field.onChange}
                style={{display:'flex',flexDirection:"column"}}
                options={['Asus', 'Acer', 'XIAOMI', 'Dell', 'HP', 'GIGABYTE', 'LG', 'BenQ', 'Samsung']}
              />
            )}
          />
        </Panel>
      </Collapse>

      <Button type="primary" htmlType="submit" block>
        Apply Filters
      </Button>
    </form>
  );
};

export default LeftSideFilter;
