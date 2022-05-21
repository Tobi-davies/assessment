import React from "react";
import {
  Pane,
  Button,
  majorScale,
  Paragraph,
  Dialog,
  Heading,
  TextInputField,
  toaster,
} from "evergreen-ui";
import { Formik, Field } from "formik";
import FormSelectBox from "../../components/form-select-box/form-select-box";

const RoomAllocation = () => {
  const [room1Dialog, setRoom1Dialog] = React.useState(false);
  const [room2Dialog, setRoom2Dialog] = React.useState(false);
  const [room3Dialog, setRoom3Dialog] = React.useState(false);

  const [room1Arr, setRoom1Arr] = React.useState([]);
  const [room2Arr, setRoom2Arr] = React.useState([]);
  const [room3Arr, setRoom3Arr] = React.useState([]);

  const closeDialog = () => {
    setRoom1Dialog(false);
    setRoom2Dialog(false);
    setRoom3Dialog(false);
  };

  return (
    <Pane maxWidth={900} width="100%" margin="auto">
      <Pane className="row">
        <Pane className="col-4">
          <Heading>ROOM1</Heading>
          <Pane width={200}>
            <Button
              appearance="success"
              fontSize="1em"
              type="submit"
              width="100%"
              marginY={majorScale(2)}
              onClick={() => setRoom1Dialog(true)}
            >
              Book a slot
            </Button>

            <Pane>
              <Paragraph>Occupants</Paragraph>
              {room1Arr.map((item, i) => {
                return (
                  <Pane key={i} marginBottom={majorScale(2)}>
                    <Paragraph>Name: {item.name}</Paragraph>
                    <Paragraph>Name: {item.role}</Paragraph>
                    <Paragraph>Name: {item.skill}</Paragraph>
                  </Pane>
                );
              })}
            </Pane>
          </Pane>
          {room1Dialog && (
            <RoomDialog
              name="Room1"
              onCancel={closeDialog}
              roomId={1}
              room1Arr={room1Arr}
              setRoom1Arr={setRoom1Arr}
            />
          )}
        </Pane>
        <Pane className="col-4">
          <Heading>ROOM2</Heading>
          <Pane width={200}>
            <Button
              appearance="success"
              fontSize="1em"
              type="submit"
              width="100%"
              marginY={majorScale(2)}
              onClick={() => setRoom2Dialog(true)}
            >
              Book a slot
            </Button>

            <Pane>
              <Paragraph>Occupants</Paragraph>
              {room2Arr.map((item, i) => {
                return (
                  <Pane key={i} marginBottom={majorScale(2)}>
                    <Paragraph>Name: {item.name}</Paragraph>
                    <Paragraph>Name: {item.role}</Paragraph>
                    <Paragraph>Name: {item.skill}</Paragraph>
                  </Pane>
                );
              })}
            </Pane>
          </Pane>
          {room2Dialog && (
            <RoomDialog
              roomId={2}
              name="Room2"
              onCancel={closeDialog}
              room2Arr={room2Arr}
              setRoom2Arr={setRoom2Arr}
            />
          )}
        </Pane>
        <Pane className="col-4">
          <Heading>ROOM3</Heading>
          <Pane width={200}>
            <Button
              appearance="success"
              fontSize="1em"
              type="submit"
              width="100%"
              marginY={majorScale(2)}
              onClick={() => setRoom3Dialog(true)}
            >
              Book a slot
            </Button>

            <Pane>
              <Paragraph>Occupants</Paragraph>
              {room3Arr.map((item, i) => {
                return (
                  <Pane key={i} marginBottom={majorScale(2)}>
                    <Paragraph>Name: {item.name}</Paragraph>
                    <Paragraph>Name: {item.role}</Paragraph>
                    <Paragraph>Name: {item.skill}</Paragraph>
                  </Pane>
                );
              })}
            </Pane>
          </Pane>
          {room3Dialog && (
            <RoomDialog
              roomId={3}
              name="Room3"
              onCancel={closeDialog}
              room3Arr={room3Arr}
              setRoom3Arr={setRoom3Arr}
            />
          )}
        </Pane>
      </Pane>
    </Pane>
  );
};

export default RoomAllocation;

const ROLE = Object.freeze({
  FACILITATOR: { label: "Facilitator", value: "FACILITATOR" },
  DEVELOPER: { label: "Developer", value: "DEVELOPER" },
});

const DEVELOPER_SKILL = Object.freeze({
  HTML: { label: "HTML", value: "HTML" },
  CSS: { label: "CSS", value: "CSS" },
  JAVASCRIPT: { label: "JAVASCRIPT", value: "JAVASCRIPT" },
});

const FACILITATOR_SKILL = Object.freeze({
  ALL: { label: "All", value: "ALL" },
});

function RoomDialog({
  onCancel,
  name,
  roomId,
  room1Arr,
  room2Arr,
  room3Arr,
  setRoom1Arr,
  setRoom2Arr,
  setRoom3Arr,
}) {
  const handleAllocation = (values) => {
    console.log(values);

    if (values.roomId === 1) {
      if (room1Arr.length >= 4) {
        toaster.warning("Room is full to capacity", {
          duration: 5,
        });
      } else if (
        room1Arr.filter((e) => e.role === "FACILITATOR").length > 0 &&
        values.role === "FACILITATOR"
      ) {
        toaster.warning("Facilitator already exists", {
          duration: 5,
        });
        return room1Arr;
      } else if (room1Arr.some((el) => el.skill === values.skill)) {
        toaster.warning("Developer with skill already exists", {
          duration: 5,
        });
      } else {
        setRoom1Arr((prev) => [...prev, values]);
        // toaster.warning("e don cast", {
        //   duration: 5,
        // });
      }
    } else if (values.roomId === 2) {
      if (room2Arr.length >= 4) {
        toaster.warning("Room is full to capacity", {
          duration: 5,
        });
      } else if (
        room2Arr.filter((e) => e.role === "FACILITATOR").length > 0 &&
        values.role === "FACILITATOR"
      ) {
        toaster.warning("Facilitator already exists", {
          duration: 5,
        });
        return room2Arr;
      } else if (room2Arr.some((el) => el.skill === values.skill)) {
        toaster.warning("Developer with skill already exists", {
          duration: 5,
        });
      } else {
        setRoom2Arr((prev) => [...prev, values]);
        // toaster.warning("e don cast", {
        //   duration: 5,
        // });
      }
    } else if (values.roomId === 3) {
      if (room3Arr.length >= 4) {
        toaster.warning("Room is full to capacity", {
          duration: 5,
        });
      } else if (
        room3Arr.filter((e) => e.role === "FACILITATOR").length > 0 &&
        values.role === "FACILITATOR"
      ) {
        toaster.warning("Facilitator already exists", {
          duration: 5,
        });
        return room3Arr;
      } else if (room3Arr.some((el) => el.skill === values.skill)) {
        toaster.warning("Developer with skill already exists", {
          duration: 5,
        });
      } else {
        setRoom3Arr((prev) => [...prev, values]);
        onCancel();

        toaster.success("Room allocated", {
          duration: 3,
        });
      }
    }
  };

  return (
    <Dialog
      hasClose={false}
      hasFooter={false}
      hasCancel={false}
      isShown={true}
      title={`${name} Allocation`}
      shouldCloseOnEscapePress={false}
      shouldCloseOnOverlayClick={false}
      onCloseComplete={onCancel}
    >
      {({ close }) => (
        <>
          <Formik
            initialValues={{ roomId: roomId, name: "", role: "", skill: "" }}
            onSubmit={handleAllocation}
          >
            {({ values, handleChange, handleSubmit }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <TextInputField
                    label="Name"
                    marginBottom={majorScale(2)}
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />

                  <Pane marginBottom={majorScale(2)}>
                    <Field name="role">
                      {({ field, form, meta }) => {
                        return (
                          <FormSelectBox
                            height={majorScale(5)}
                            label="Role"
                            placeholder="Select role"
                            name={field.name}
                            value={field.value}
                            options={Object.values(ROLE)}
                            onChange={(selected) => {
                              form.setFieldValue(field.name, selected.value);
                            }}
                          />
                        );
                      }}
                    </Field>
                  </Pane>

                  {values.role === "DEVELOPER" ? (
                    <Field name="skill">
                      {({ field, form, meta }) => {
                        return (
                          <FormSelectBox
                            height={majorScale(5)}
                            label="Skill"
                            placeholder="Select skill"
                            name={field.name}
                            value={field.value}
                            options={Object.values(DEVELOPER_SKILL)}
                            onChange={(selected) => {
                              form.setFieldValue(field.name, selected.value);
                            }}
                          />
                        );
                      }}
                    </Field>
                  ) : values.role === "FACILITATOR" ? (
                    <Field name="skill">
                      {({ field, form, meta }) => {
                        return (
                          <FormSelectBox
                            height={majorScale(5)}
                            label="Skill"
                            placeholder="Select skill"
                            name={field.name}
                            value={field.value}
                            options={Object.values(FACILITATOR_SKILL)}
                            onChange={(selected) => {
                              form.setFieldValue(field.name, selected.value);
                            }}
                          />
                        );
                      }}
                    </Field>
                  ) : (
                    ""
                  )}

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
                    >
                      Submit
                    </Button>
                  </Pane>
                </form>
              );
            }}
          </Formik>
        </>
      )}
    </Dialog>
  );
}
