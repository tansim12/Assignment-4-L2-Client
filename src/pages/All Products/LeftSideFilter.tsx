import { useForm, Controller } from 'react-hook-form';
import { Radio, Select, Button, Collapse } from 'antd';
import { allCategoryArray } from '../../types/Const/product.const';
import { LeftSideFilterProps } from '../../types/quearyFilter.type';

const { Panel } = Collapse;

interface FilterForm {
  availability: string;
  category: string;
}



const LeftSideFilter: React.FC<LeftSideFilterProps> = ({ setQueryObj }) => {
  const { control, handleSubmit } = useForm<FilterForm>({
    defaultValues: {
      availability: "",
      category: "",
    },
  });

  const onSubmit = (data: FilterForm) => {
    setQueryObj((prev) => ({ ...prev, ...data }));
    // You can trigger any other action needed here, e.g., making an API call with the new queryObj
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', width: '300px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
      {/* <div style={{ marginBottom: '20px' }}>
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
      </div> */}

      <Collapse defaultActiveKey={['1']} style={{ marginBottom: '20px' }}>
        <Panel header="Availability" key="1">
          <Controller
            name="availability"
            control={control}
            render={({ field }) => (
              <Radio.Group
                value={field.value}
                onChange={field.onChange}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <Radio value="In Stock">In Stock</Radio>
                <Radio value="Pre Order">Pre Order</Radio>
                <Radio value="Up Coming">Up Coming</Radio>
              </Radio.Group>
            )}
          />
        </Panel>
      </Collapse>

      <Collapse defaultActiveKey={['1']} style={{ marginBottom: '20px' }}>
        <Panel header="Category" key="1">
          <Controller
            name="category"
            control={control}
            render={({ field }) => (

              <Radio.Group
              value={field.value}
              onChange={field.onChange}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {allCategoryArray?.map(item=>( <Radio value={item}>{item}</Radio>))}
             
            </Radio.Group>
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
