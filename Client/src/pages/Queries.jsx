import Breadcrumb from '../components/Breadcrumb';
import TableQuery from '../components/TableQuery';

import DefaultLayout from '../layout/DefaultLayout';

const Query = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="User Queries" />

      <div className="flex flex-col gap-10">
        <TableQuery />
      </div>
    </DefaultLayout>
  );
};

export default Query;
