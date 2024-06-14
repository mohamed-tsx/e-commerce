import { useCheckout } from "../Hooks/useCheckout";
const Shipping = () => {
  const { checkoutInfo } = useCheckout();
  return (
    <div className="px-12 py-2">
      <div>
        <div className="p-4 border-2 border-gray-500 rounded-md flex flex-col gap-2">
          <div className="flex gap-10">
            <p className="text-gray-500">Contact </p>
            <p>{checkoutInfo.email}</p>
          </div>
          <hr />
          <div className="flex gap-10">
            <p className="text-gray-500">Address </p>

            <p>
              {checkoutInfo.address}, {checkoutInfo.apartment},{" "}
              {checkoutInfo.city}, {checkoutInfo.postalCode}
              {", "}
              {checkoutInfo.selectedCountry}
            </p>
          </div>
        </div>
        <div className="mt-20">
          <p className="uppercase font-semibold">Shipping Method</p>
          <hr className="mt-2" />
          <fieldset className="space-y-4">
            <legend className="sr-only">Delivery</legend>

            <div>
              <label
                htmlFor="DeliveryStandard"
                className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-black has-[:checked]:ring-1 has-[:checked]:ring-black"
              >
                <p className="text-gray-700">Standard {"(5-7) Days"}</p>

                <p className="text-gray-900">$5.00</p>

                <input
                  type="radio"
                  name="DeliveryOption"
                  value="DeliveryStandard"
                  id="DeliveryStandard"
                  className="sr-only"
                  checked
                />
              </label>
            </div>

            <div>
              <label
                htmlFor="DeliveryPriority"
                className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-black has-[:checked]:ring-1 has-[:checked]:ring-black"
              >
                <p className="text-gray-700">Rush {"(2-3) Days"}</p>

                <p className="text-gray-900">$15.00</p>

                <input
                  type="radio"
                  name="DeliveryOption"
                  value="DeliveryPriority"
                  id="DeliveryPriority"
                  className="sr-only"
                />
              </label>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
