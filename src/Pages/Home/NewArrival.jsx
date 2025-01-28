import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function NewArrival() {
  return (
    <>
      <div className="flex justify-center mt-3">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
          <Card className="w-96">
            <CardHeader shadow={false} floated={false}>
              <img
                src="https://i.ibb.co.com/VCvRRgt/20250123-132034.jpg"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  Salwar Kameez
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  $95.00
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
          <Card className="w-96">
            <CardHeader shadow={false} floated={false}>
              <img
                src="https://i.ibb.co.com/825ptbm/20250123-124250.jpg"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                Salwar Kameez
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  $95.00
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
          <Card className="w-96">
            <CardHeader shadow={false} floated={false}>
              <img
                src="https://i.ibb.co.com/48YC70t/20250123-120010.jpg"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                Salwar Kameez
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  $95.00
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
