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
        className={`flex p-2 min-w-[60vw] lg:min-w-[30vw] xl:minn-w-[20vw] ${
          isLoading ||
          (isFetching && 'justify-center items-center w-full h-full')
        }`}
      >
        {isFetching || isLoading ? (
          <div className={``}>
            <CircularProgress color="#4AD697" />
          </div>
        ) : (
          <div className="w-full h-full">
            <div className="flex justify-center items-center">
              <p>Member details</p>
            </div>
            <div className="w-full mt-12 flex flex-col items-center">
              <img
                src={removerMedDaString(data?.picture || '')}
                alt="member"
                className="rounded-full"
              />
              <div className="w-full items-center flex justify-center flex-col">
                <div className="mt-2 flex gap-1 items-baseline">
                  <p className="text-sm">{titleSwitch(data?.title || '')}.</p>
                  <p className="text-lg font-medium">
                    {data?.firstName} {data?.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#4AD697]">{data?.email}</p>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-zinc-400 my-8"></div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <p>Name:</p>
                <p>
                  {data?.firstName} {data?.lastName}
                </p>
              </div>
              <div className="flex justify-between">
                <p>First name:</p>
                <p>{data?.firstName}</p>
              </div>
              <div className="flex justify-between">
                <p>Last name:</p>
                <p>{data?.lastName}</p>
              </div>
              <div className="flex justify-between">
                <p>Gender</p>
                <p>{data?.gender}</p>
              </div>
              <div className="flex justify-between">
                <p>Birth:</p>
                <p>{formatDate(data?.dateOfBirth || '')}</p>
              </div>
              <div className="flex justify-between">
                <p>Phone:</p>
                <p>{data?.phone}</p>
              </div>
              <div className="flex justify-between">
                <p>Email:</p>
                <p>{data?.email}</p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-zinc-400 my-8"></div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <p>Street:</p>
                <p>{data?.location?.street}</p>
              </div>
              <div className="flex justify-between">
                <p>City:</p>
                <p>{data?.location?.city}</p>
              </div>
              <div className="flex justify-between">
                <p>State:</p>
                <p>{data?.location?.state}</p>
              </div>
              <div className="flex justify-between">
                <p>Country:</p>
                <p>{data?.location?.country}</p>
              </div>
              <div className="flex justify-between">
                <p>Timezone:</p>
                <p>
                  <span className="text-gray-600">
                    (UTC {data?.location?.timezone})
                  </span>
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
