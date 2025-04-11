import EcommerceMetrics from '../../components/ecommerce/EcommerceMetrics';
import MonthlySalesChart from '../../components/ecommerce/MonthlySalesChart';
import StatisticsChart from '../../components/ecommerce/StatisticsChart';
import MonthlyTarget from '../../components/ecommerce/MonthlyTarget';
import RecentOrders from '../../components/ecommerce/RecentOrders';
import DemographicCard from '../../components/ecommerce/DemographicCard';
import PageMeta from '../../components/common/PageMeta';
import Button from '../../components/ui/button/Button';
import { Modal } from '../../components/ui/modal';
import { useModal } from '../../hooks/useModal';
import Input from '../../components/form/input/InputField';
import Label from '../../components/form/Label';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChangePasswordResponse } from '../../types/AuthTypes';
import useAxios from '../../hooks/useAxios';
import { clearChallange, clearSession } from '../../redux/slices/authSlice';
import { EyeCloseIcon, EyeIcon } from '../../icons';

export default function Ecommerce() {
  const dispatch = useDispatch();
  const { isOpen, openModal, closeModal } = useModal();
  const authData = useSelector((state: RootState) => state.authSlice);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (authData.challange === 'NEW_PASSWORD_REQUIRED') {
      openModal();
    }
  }, [authData.challange, openModal]);

  const {
    data: changePasswordResponse,
    error: changePasswordError,
    callAPI: changePasswordAPI,
    loading,
  } = useAxios<ChangePasswordResponse>('/Stage/org/change-password', 'POST');

  const formik = useFormik({
    initialValues: {
      username: 'xoroda3210@deenur.com',
      newPassword: '',
      confirmPassword: '',
      session: authData.session,
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
          'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
        )
        .required('New password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), undefined], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: async (values) => {
      try {
        await changePasswordAPI({
          data: {
            username: 'xoroda3210@deenur.com',
            newPassword: 'Saturday@2203',
            session: values.session,
          },
        });
      } catch (err) {
        alert(changePasswordError || 'Something went wrong. Please try again.');
      }
    },
  });

  useEffect(() => {
    if (changePasswordResponse?.success) {
      dispatch(clearSession());
      dispatch(clearChallange());
      alert('Password changed successful!');
      closeModal();
    }
    if (changePasswordError) {
      alert(changePasswordError);
    }
  }, [changePasswordResponse, changePasswordError, closeModal, dispatch]);

  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />

          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[500px] m-4">
          <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-8">
            <div className="px-2 pr-14">
              <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                Change Password
              </h4>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                Please enter your new password and confirm it to update your credentials.
              </p>
            </div>
            <form className="flex flex-col">
              <div className="px-2 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 gap-y-5">
                  <div>
                    <Label>
                      New Password <span className="text-error-500">*</span>{' '}
                    </Label>
                    <div className="relative">
                      <Input
                        name="newPassword"
                        type={showNewPassword ? 'text' : 'password'}
                        placeholder="Enter new password"
                        value={formik.values.newPassword}
                        onChange={formik.handleChange}
                      />
                      <span
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                      >
                        {showNewPassword ? (
                          <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                        ) : (
                          <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                        )}
                      </span>
                    </div>
                    {formik.touched.newPassword && formik.errors.newPassword && (
                      <p className="mt-1 text-sm text-error-500">{formik.errors.newPassword}</p>
                    )}
                  </div>
                  <div>
                    <Label>
                      Confirm Password <span className="text-error-500">*</span>{' '}
                    </Label>
                    <div className="relative">
                      <Input
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm new password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                      />
                      <span
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                      >
                        {showConfirmPassword ? (
                          <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                        ) : (
                          <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                        )}
                      </span>
                    </div>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                      <p className="mt-1 text-sm text-error-500">{formik.errors.confirmPassword}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                <Button size="sm" variant="outline" onClick={closeModal}>
                  Cancel
                </Button>
                <Button size="sm" disabled={loading} onClick={formik.handleSubmit} type="submit">
                  Change Password
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
}
