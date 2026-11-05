/* INTERACTIVE TO-DO LIST CSS */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --ink: #17233c;
    --muted: #718096;
    --blue: #2563eb;
    --pale: #eff4ff;
    --line: #e3e9f2;
}

body {
    min-height: 100vh;
    padding: 45px 16px;

    background:
        radial-gradient(
            circle at top left,
            #e4edff,
            transparent 38%
        ),
        #f5f7fb;

    color: var(--ink);
    font-family: Arial, sans-serif;
    line-height: 1.5;
}

button,
input {
    font: inherit;
}

button {
    cursor: pointer;
}

/* MAIN CONTAINER */

.app {
    width: min(100%, 720px);
    margin: auto;
    padding: 38px;

    background: white;
    border: 1px solid #e9edf4;
    border-radius: 24px;

    box-shadow: 0 20px 60px #18305817;
}

/* HEADER */

.header,
.section-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.header {
    margin-bottom: 32px;
}

.eyebrow {
    color: var(--blue);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 7px;
}

h1 {
    font-size: clamp(30px, 5vw, 43px);
    letter-spacing: -1.5px;
}

h1 span {
    color: var(--blue);
}

h2 {
    font-size: 20px;
}

.muted {
    color: var(--muted);
    font-size: 14px;
}

.header .muted {
    margin-top: 7px;
}

.logo {
    display: grid;
    place-items: center;

    width: 58px;
    height: 58px;

    border-radius: 18px;
    color: white;

    background: linear-gradient(
        140deg,
        #123e78,
        var(--blue)
    );

    font-size: 30px;
    font-weight: bold;
}

/* ADD TASK SECTION */

.add-panel {
    padding: 24px;

    background: #f5f8ff;
    border: 1px solid #e5ecfb;
    border-radius: 17px;
}

#taskForm {
    display: flex;
    gap: 10px;
    margin-top: 15px;
}

#taskInput {
    flex: 1;
    min-width: 0;
    padding: 14px;

    border: 1px solid var(--line);
    border-radius: 10px;
    outline: none;
}

#taskInput:focus {
    border-color: var(--blue);
    box-shadow: 0 0 0 3px #2563eb20;
}

.add-btn {
    padding: 12px 18px;

    color: white;
    background: var(--blue);

    border: 0;
    border-radius: 10px;

    font-weight: bold;
}

.add-btn:hover {
    background: #174fc4;
}

#message {
    min-height: 18px;
    margin-top: 6px;
    color: #c24141;
    font-size: 12px;
}

/* TASK SECTION */

.tasks-section {
    margin-top: 35px;
}

.section-heading {
    align-items: end;
}

.section-heading .eyebrow {
    margin-bottom: 5px;
}

.section-heading strong {
    color: var(--blue);
    font-size: 18px;
}

/* FILTER BUTTONS */

.toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    margin: 20px 0 14px;
    padding-bottom: 14px;

    border-bottom: 1px solid var(--line);
}

.filters {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}

.filter,
.clear-btn {
    padding: 8px 12px;

    background: transparent;
    border: 0;
    border-radius: 8px;

    color: var(--muted);
    font-size: 13px;
}

.filter.active {
    color: var(--blue);
    background: var(--pale);
    font-weight: bold;
}

.clear-btn {
    color: #c24141;
}

.clear-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

/* TASK ITEMS */

.task-list {
    display: grid;
    gap: 10px;
    list-style: none;
}

.task-item {
    display: flex;
    align-items: center;
    gap: 12px;

    padding: 14px;

    border: 1px solid var(--line);
    border-radius: 11px;
}

.task-check {
    width: 19px;
    height: 19px;

    accent-color: #16a36a;
    cursor: pointer;
}

.task-text {
    flex: 1;
    overflow-wrap: anywhere;
    font-size: 14px;
}

.task-item.completed .task-text {
    color: #9aa4b3;
    text-decoration: line-through;
}

.delete-btn {
    padding: 7px 10px;

    color: #c24141;
    background: #fff3f3;

    border: 0;
    border-radius: 7px;

    font-size: 12px;
    font-weight: bold;
}

.delete-btn:hover {
    background: #ffe2e2;
}

/* EMPTY STATE */

.empty {
    text-align: center;
    padding: 34px 15px;
    color: var(--muted);
}

.empty div {
    font-size: 30px;
    color: var(--blue);
}

.empty h3 {
    color: var(--ink);
    font-size: 17px;
    margin: 6px 0;
}

.empty p {
    font-size: 13px;
}

[hidden] {
    display: none !important;
}

/* FOOTER */

footer {
    display: flex;
    justify-content: space-between;
    gap: 12px;

    margin-top: 28px;
    padding-top: 17px;

    border-top: 1px solid var(--line);

    color: #8993a4;
    font-size: 11px;
}

/* ACCESSIBILITY */

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* MOBILE RESPONSIVE DESIGN */

@media (max-width: 560px) {

    body {
        padding: 18px 10px;
    }

    .app {
        padding: 22px 16px;
        border-radius: 18px;
    }

    .logo {
        width: 48px;
        height: 48px;
    }

    .add-panel {
        padding: 17px;
    }

    #taskForm {
        flex-direction: column;
    }

    .add-btn {
        width: 100%;
    }

    .toolbar {
        align-items: flex-start;
        flex-direction: column;
    }

    footer {
        flex-direction: column;
    }
}
