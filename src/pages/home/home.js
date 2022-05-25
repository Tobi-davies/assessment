import React from "react";
import "./home.css";
import {
  Pane,
  Button,
  majorScale,
  Paragraph,
  Dialog,
  RadioGroup,
} from "evergreen-ui";

// const radioOptions = [
//   { label: "Small vehicles Only", value: "small" },
//   { label: "Small and Bigger vehicles", value: "smallandbig" },
// ];

// const smallSlots = [
//   { name: "slot1", id: 1, fee: 60, booked: false },
//   { name: "slot2", id: 2, fee: 60, booked: false },
//   { name: "slot3", id: 3, fee: 60, booked: false },
//   { name: "slot4", id: 4, fee: 60, booked: false },
//   { name: "slot5", id: 5, fee: 60, booked: false },
//   { name: "slot6", id: 6, fee: 60, booked: false },
//   { name: "slot7", id: 7, fee: 60, booked: false },
//   { name: "slot8", id: 8, fee: 60, booked: false },
//   { name: "slot9", id: 9, fee: 60, booked: false },
//   { name: "slot10", id: 10, fee: 60, booked: false },
// ];

// const smallandbigslots = [
//   { name: "slot1", id: 11, fee: 100, booked: false },
//   { name: "slot2", id: 12, fee: 100, booked: false },
//   { name: "slot3", id: 13, fee: 100, booked: false },
//   { name: "slot4", id: 14, fee: 100, booked: false },
//   { name: "slot5", id: 15, fee: 100, booked: false },
// ];

const Home = () => {
  const [smallSlots] = React.useState([
    { name: "slot1", id: 1, fee: 60, booked: false },
    { name: "slot2", id: 2, fee: 60, booked: false },
    { name: "slot3", id: 3, fee: 60, booked: false },
    { name: "slot4", id: 4, fee: 60, booked: false },
    { name: "slot5", id: 5, fee: 60, booked: false },
    { name: "slot6", id: 6, fee: 60, booked: false },
    { name: "slot7", id: 7, fee: 60, booked: false },
    { name: "slot8", id: 8, fee: 60, booked: false },
    { name: "slot9", id: 9, fee: 60, booked: false },
    { name: "slot10", id: 10, fee: 60, booked: false },
  ]);
  const [smallandbigslots] = React.useState([
    { name: "slot1", id: 11, fee: 100, booked: false },
    { name: "slot2", id: 12, fee: 100, booked: false },
    { name: "slot3", id: 13, fee: 100, booked: false },
    { name: "slot4", id: 14, fee: 100, booked: false },
    { name: "slot5", id: 15, fee: 100, booked: false },
  ]);
  const [isDialogOpen, setIsDIalogOpen] = React.useState(false);

  // const [radioValue, setRadioValue] = React.useState("small");

  const [currentSlot, setCurrentSlot] = React.useState({});

  const [totalFee, setTotalFee] = React.useState(0);

  const onCancel = () => {
    setIsDIalogOpen(false);
  };

  console.log(smallSlots);

  return (
    <>
      <Pane>
        <Pane>;,lkjlbkhvgjc</Pane>
        <header className="header">
          <div>Parkers</div>
          <Pane width={300}>
            <Button
              appearance="primary"
              fontSize="1em"
              type="submit"
              width="100%"
              marginY={majorScale(2)}
              // isLoading={status === LOADING}
            >
              Submit
            </Button>
          </Pane>
        </header>

        <Pane maxWidth={1000} margin="auto">
          <Paragraph>TotalFee : {totalFee}</Paragraph>
          <Pane width={200}>
            <Button
              appearance="success"
              fontSize="1em"
              type="submit"
              width="100%"
              marginY={majorScale(2)}
              // onClick={() => setIsDIalogOpen(true)}
            >
              Book a slot
            </Button>
          </Pane>

          {/* {isDialogOpen && (
          <SelectSlot radioValue={radioValue} setRadioValue={setRadioValue} />
        )} */}
          <Paragraph>Available slots</Paragraph>
          <Pane className="row" border="1px solid red">
            <Pane className="col-6">
              <Paragraph>Small vehicle slots(10 available)</Paragraph>
              <Pane>
                {smallSlots.map((item, i) => {
                  return (
                    <Pane
                      key={i}
                      width={100}
                      textAlign="center"
                      // border="1px solid red"
                      marginBottom={5}
                      textDecoration={item.booked ? "line-through" : "unset"}
                      disabled={true}
                    >
                      <Paragraph
                        // height={20}
                        borderRadius={5}
                        backgroundColor={!item.booked ? "blue" : "#B6D0E2"}
                        paddingX={10}
                        paddingY={5}
                        color="#fff"
                        cursor="pointer"
                        onClick={() => {
                          setCurrentSlot({
                            name: item.name,
                            id: item.id,
                            fee: item.fee,
                          });
                          setIsDIalogOpen(true);
                        }}
                      >
                        slot{i + 1}
                      </Paragraph>
                    </Pane>
                  );
                })}
              </Pane>
            </Pane>
            <Pane className="col-6">
              <Paragraph>Small & bigger vehicle slots(5 available)</Paragraph>
              <Pane>
                {smallandbigslots.map((item, i) => {
                  return (
                    <Pane
                      key={i}
                      width={100}
                      textAlign="center"
                      marginBottom={5}
                      textDecoration={item.booked ? "line-through" : "unset"}
                    >
                      <Paragraph
                        // height={20}
                        borderRadius={5}
                        backgroundColor={!item.booked ? "blue" : "#B6D0E2"}
                        paddingX={10}
                        paddingY={5}
                        color="#fff"
                        cursor="pointer"
                        onClick={() => {
                          setCurrentSlot({
                            name: item.name,
                            id: item.id,
                            fee: item.fee,
                          });
                          setIsDIalogOpen(true);
                        }}
                      >
                        slot{i + 1}
                      </Paragraph>
                    </Pane>
                  );
                })}
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      </Pane>

      {isDialogOpen && (
        <SlotDialog
          currentSlot={currentSlot}
          onCancel={onCancel}
          smallandbigslots={smallandbigslots}
          smallSlots={smallSlots}
          setTotalFee={setTotalFee}
        />
      )}
    </>
  );
};

export default Home;

function SlotDialog({
  currentSlot,
  onCancel,
  smallandbigslots,
  smallSlots,
  setTotalFee,
}) {
  // console.log(currentSlot);
  // console.log(smallandbigslots);

  const handleSubmit = () => {
    console.log(currentSlot);
    if (currentSlot.id < 11) {
      let index = smallSlots.findIndex((obj) => obj.id === currentSlot.id);
      smallSlots[index].booked = true;

      setTotalFee((prev) => prev + currentSlot.fee);
      onCancel();
    } else {
      let index = smallandbigslots.findIndex(
        (obj) => obj.id === currentSlot.id
      );

      smallandbigslots[index].booked = true;

      setTotalFee((prev) => prev + currentSlot.fee);
      onCancel();
    }
  };

  return (
    <Dialog
      hasClose={false}
      hasFooter={false}
      hasCancel={false}
      isShown={true}
      title={`Book slot${currentSlot.id}`}
      shouldCloseOnEscapePress={false}
      shouldCloseOnOverlayClick={false}
      onCloseComplete={onCancel}
    >
      {({ close }) => (
        <>
          <Pane>
            Parking fee for {currentSlot.name} is {currentSlot.fee}USD for
            30minutes. staying beyound the stipulated time attracts a fee of
            15USD per hour
          </Pane>

          <Pane
            marginTop={majorScale(2)}
            marginBottom={majorScale(3)}
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              type="button"
              marginTop={majorScale(2)}
              marginRight={majorScale(2)}
              onClick={close}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              intent="success"
              appearance="primary"
              marginTop={majorScale(2)}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Pane>
        </>
      )}
    </Dialog>
  );
}
