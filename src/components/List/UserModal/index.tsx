import { useEffect } from 'react';
import { getUserById, getUserByIdResponse } from '../../../services/api';
import { useQuery } from 'react-query';
import Modal from '../../Modal';
import CircularProgress from '../../Feedback/Progress/Circular';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import removerMedDaString from '../../../utils/cleanImageURLtoResize';
import formatDate from '../../../utils/formatDate';
import titleSwitch from '../../../utils/titleSwitch';

interface userModalProps {
  userId: string;
  open: boolean;
  onClose: () => void;
}

const UserModal = ({ userId, open, onClose }: userModalProps) => {
  const { data, isLoading, refetch, isFetching } =
    useQuery<getUserByIdResponse>('user', () => getUserById(userId), {
      staleTime: 1000 * 60 * 1,
      cacheTime: 10,
    });

  const { width } = useWindowDimensions();

  useEffect(() => {
    refetch();
  }, [userId]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      position={width < 640 ? 'bottom' : 'right'}
      isMobile={width < 640}
    >
      <div
        className={`flex p-2 min-w-[30vw]  ${
          isLoading ||
          (isFetching && 'justify-center items-center w-full h-full')
        }`}
      >
        {isFetching || isLoading ? (
          <div className={``}>
            <CircularProgress color="#4AD697" />
          </div>
        ) : (
          <div className="w-full">
            <div className="flex gap-6 flex-col">
              <div className="flex flex-col gap-2">
                <div className="w-full flex items-center justify-center">
                  {data?.picture && (
                    <img
                      src={removerMedDaString(data.picture)}
                      alt="user"
                      className="rounded-md"
                    />
                  )}
                </div>
                <div>
                  <div className="flex items-baseline justify-start gap-1">
                    <p>{titleSwitch(data?.title ? data.title : '')}.</p>
                    <h1 className="text-xl ">
                      {data?.firstName} {data?.lastName}
                    </h1>
                  </div>
                  <p>Gender: {data?.gender}</p>
                  <p>
                    Birth:{' '}
                    {formatDate(data?.dateOfBirth ? data?.dateOfBirth : '')}
                  </p>
                  <p>Email: {data?.email}</p>
                  <p>Phone: {data?.phone}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <p className="text-xl font-bold">Location:</p>
                  <div className="w-full h-[1px] bg-gray-400 ml-5"></div>
                </div>
                <p>
                  {data?.location?.street}, {data?.location?.city},{' '}
                  {data?.location?.state}, {data?.location?.country}
                </p>
                <p>
                  Timezone: {data?.location?.timezone}{' '}
                  {data?.location?.timezone && (
                    <span className="text-gray-400">
                      (UTC {data?.location?.timezone})
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default UserModal;

// {
// 	"id": "60d0fe4f5311236168a10a1c",
// 	"title": "miss",
// 	"firstName": "Abigail",
// 	"lastName": "Liu",
// 	"picture": "https://randomuser.me/api/portraits/med/women/83.jpg",
// 	"gender": "female",
// 	"email": "abigail.liu@example.com",
// 	"dateOfBirth": "1973-08-20T23:32:33.104Z",
// 	"phone": "200-877-5652",
// 	"location": {
// 		"street": "6721, George St",
// 		"city": "Jasper",
// 		"state": "Newfoundland and Labrador",
// 		"country": "Canada",
// 		"timezone": "+5:30"
// 	},
// 	"registerDate": "2021-06-21T21:02:21.235Z",
// 	"updatedDate": "2021-06-21T21:02:21.235Z"
// }
