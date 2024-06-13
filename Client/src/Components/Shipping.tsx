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
        </div>
      </div>
    </div>
  );
};

export default Shipping;
